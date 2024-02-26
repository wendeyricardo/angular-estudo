import { Component, OnInit } from '@angular/core';
import { DialogComponent } from '../dialog/dialog.component';
import { MatDialog } from '@angular/material/dialog';
import { ChecklistEditComponent } from '../checklist-edit/checklist-edit.component';
import { ChecklistService } from '../services/checklist.service';
import { CheckListItem } from '../_models/checklist_item';
import { SnackBarService } from '../services/snack-bar.service';

@Component({
  selector: 'app-checklist',
  templateUrl: './checklist.component.html',
  styleUrls: ['./checklist.component.css']
})
export class ChecklistComponent implements OnInit {

  public dataSource: CheckListItem[] = [];

  public displayedColumns: string[] = ['id','completed', 'description', 'deadline', 'postDate', 'category', 'actions'];

  constructor(private dialog: MatDialog, private checklistService: ChecklistService, private snackBarService: SnackBarService) { }

  ngOnInit(): void {
    this.checklistService.getAllChecklistItems().subscribe(
      (resp: CheckListItem[]) =>  {
        this.dataSource = resp;
      }, (error: any) => {
          console.log(`Ocorreu um erro ao chamar a API: ${error}`);
      });
  }
  
  public createNewItem(){
    console.log('criar novo item do checklist clicado');

    this.dialog.open(ChecklistEditComponent, {
      disableClose: true, data:{ actionName: 'Criar'},
    }).afterClosed().subscribe( resp => {
      console.log('fechando modal criação');
      
      if (resp) {
        this.snackBarService.showSnackBar('Item do CheckList criado com sucesso!', 'OK');
      } 
    });
  }
  
  public updateCompleteStatus(status: boolean){
    console.log('status alterado $(status)');
  }

  public updateChecklistItem(checkListItem: CheckListItem){
    console.log('atualizando item do checklist');

    this.dialog.open(ChecklistEditComponent, {
      disableClose: true, data:{ updatableChecklistItem: checkListItem, actionName: 'Editar'},
    }).afterClosed().subscribe( resp => {
      console.log('fechando modal edição');

      if (resp) {
        this.snackBarService.showSnackBar('Item do CheckList editado com sucesso!', 'OK');
      } 
    });
  }

  public deleteChecklistItem(checkListItem: CheckListItem){
    console.log('deletando item do checklist');

    this.dialog.open(DialogComponent, {disableClose: true,
      data: {dialogMsg: 'Você deseja realmente apagar esse item?',
      leftButtonLabel: 'Cancelar', rightButtonLabel: 'Ok'}
    }).afterClosed().subscribe(resp => {
          console.log('janela modal confirmar apagada fechada');

          if (resp) {
            this.snackBarService.showSnackBar('Item do CheckList apagado com sucesso!', 'OK');
          } 
      });    
  }

}
