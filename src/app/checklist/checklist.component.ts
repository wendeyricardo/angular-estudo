import { Component, OnInit } from '@angular/core';
import { CATEGORY_DATA } from '../category/category.component';
import { DialogComponent } from '../dialog/dialog.component';
import { MatDialog } from '@angular/material/dialog';
import { ChecklistEditComponent } from '../checklist-edit/checklist-edit.component';
import { CheckListItem } from '../_models/checklist_item';

export const CHECKLIST_DATA = [
  { guid: 'aaa-bbb-ccc-ddd', completed: false, description: 'ir ao ortopedista', deadline: Date.now(), postDate: Date.now(),
  category: CATEGORY_DATA.find(x =>x.name=='Saúde')
 },
 { guid: 'aaa-bbb-ccc-ddd', completed: true, description: 'Reunião com o time', deadline: Date.now(), postDate: Date.now(),
  category: CATEGORY_DATA.find(x =>x.name=='Trabalho')
 },
]

@Component({
  selector: 'app-checklist',
  templateUrl: './checklist.component.html',
  styleUrls: ['./checklist.component.css']
})
export class ChecklistComponent implements OnInit {

  public dataSource = CHECKLIST_DATA;

  public displayedColumns: string[] = ['id','completed', 'description', 'deadline', 'postDate', 'category', 'actions'];

  constructor(private dialog: MatDialog) { }

  ngOnInit(): void {
  }
  
  public createNewItem(){
    console.log('criar novo item do checklist clicado');

    this.dialog.open(ChecklistEditComponent, {
      disableClose: true, data:{ actionName: 'Criar'},
    }).afterClosed().subscribe( resp => {
      console.log('fechando modal criação');
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
    });
  }

  public deleteChecklistItem(checkListItem: CheckListItem){
    console.log('deletando item do checklist');

    this.dialog.open(DialogComponent, {disableClose: true,
      data: {dialogMsg: 'Você deseja realmente apagar esse item?',
      leftButtonLabel: 'Cancelar', rightButtonLabel: 'Ok'}
    }).afterClosed().subscribe(resp => {
          console.log('janela modal confirmar apagada fechada');
      });    
  }

}
