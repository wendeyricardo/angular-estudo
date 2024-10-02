import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ChecklistEditComponent } from '../checklist-edit/checklist-edit.component';
import { DialogComponent } from '../dialog/dialog.component';
import { ChecklistService } from '../services/checklist.service';
import { SnackBarService } from '../services/snack-bar.service';
import { CheckListItem } from '../_models/checklist_item';

@Component({
  selector: 'app-checklist',
  templateUrl: './checklist.component.html',
  styleUrls: ['./checklist.component.css']
})
export class ChecklistComponent implements OnInit {

  public dataSource: CheckListItem[] = [];

  public displayedColumns: string[] = ['id', 'completed', 'description', 'deadline', 'postDate', 'category', 'actions'];

  constructor(private dialog: MatDialog, private checklistService: ChecklistService, private snackBarService: SnackBarService) { }

  ngOnInit(): void {
    this.loadAllItems();
  }

  private loadAllItems(){
    this.checklistService.getAllChecklistItems().subscribe(
      (resp: CheckListItem[]) =>  {
        this.dataSource = resp;
      }, (error: any) => {
          console.log(`Ocorreu um erro ao chamar a API: ${error}`);
      });
  }

  public updateCompleteStatus(guid: string, status: boolean){

    this.checklistService.updateCompleteStatus(guid, status).subscribe(
      (resp: any) => {
          this.snackBarService.showSnackBar('Item atualizado com successo', 'OK');
          this.loadAllItems();
      }, err => {
        this.snackBarService.showSnackBar('Um erro ocorreu ao atualizar o item; por favor tente novamente!', 'OK');
      }
    );
  }

  public createNewItem(){

    this.dialog.open(ChecklistEditComponent, {
      disableClose: true, data: { actionName: 'Criar' },
    }).afterClosed().subscribe( resp => {
      if(resp){
        this.loadAllItems();
      }
    });

  }

  public deleteChecklistItem(checklistItem: CheckListItem){
    console.log('deletando item do checklist');

    this.dialog.open(DialogComponent, { disableClose: true,
      data: { msg: 'Você deseja realmente apagar esse item?', leftButton: 'Cancelar', rightButton: 'Ok' }
    }).afterClosed().subscribe(resp => {
      if(resp){
        this.checklistService.deleteChecklistItem(checklistItem.guid).subscribe(
          (resp: any) => {
            this.loadAllItems();
            this.snackBarService.showSnackBar('Item do checklist apagado com sucesso!', 'OK');
          }, (err: any) => {
            this.snackBarService.showSnackBar('Um erro ocorreu ao apagar o item do checklist; tente novamente!', 'OK');
          }
        )
      }
    });

  }

  public updateChecklistItem(checklistItem: CheckListItem){
      this.dialog.open(ChecklistEditComponent, {
      disableClose: true, data: { updatableChecklistItem: checklistItem, actionName: 'Editar' },
    }).afterClosed().subscribe( resp => {
      if(resp){
        this.loadAllItems();
      }
    });
  }

}
