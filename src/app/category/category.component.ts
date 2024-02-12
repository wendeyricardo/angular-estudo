import { Component, OnInit } from '@angular/core';
import { Category } from '../_models/category';
import { MatDialog } from '@angular/material/dialog';
import { DialogComponent } from '../dialog/dialog.component';
import { CategoryEditComponent } from '../category-edit/category-edit.component';

export const CATEGORY_DATA = [
  { name: 'Educação', guid: 'aaaa-bbbb-cccc-dddd' },
  { name: 'Saúde', guid: 'aaaa-bbbb-cccc-dddd' },
  { name: 'Trabalho', guid: 'aaaa-bbbb-cccc-dddd' },
  { name: 'Outros', guid: 'aaaa-bbbb-cccc-dddd' },
]

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css']
})
export class CategoryComponent implements OnInit {

  displayedColumns: string[] = ['id', 'name', 'actions'];
  public dataSource: Category[] = CATEGORY_DATA;

  constructor(private dialog: MatDialog) { }

  ngOnInit(): void {
  }

  public editCategory(inputCategory: Category) {
    console.log('edit new category clicked');

    this.dialog.open(CategoryEditComponent, {disableClose: true, data: { editableCategory: inputCategory}
    }).afterClosed().subscribe(resp =>{
      console.log('Modal editar fechada');
    })
        
  }

  public deleteCategory(category: Category) {
    this.dialog.open(DialogComponent, {disableClose: true,
      data: {dialogMsg: 'Você tem certeza que gostaria de apagar a categoria?',
      leftButtonLabel: 'Cancelar', rightButtonLabel: 'Sim'}}).afterClosed().subscribe(
      resp => {
        if (resp) {
          console.log('categoria apagada com sucesso');
        } else {
          console.log('categoria não apagada');
        }
      }
    )
  }

  public createNewCategory() {
    console.log('create new category clicked');

    this.dialog.open(CategoryEditComponent, {disableClose: true, data: { actionName: 'Criar'}
    }).afterClosed().subscribe(resp =>{
      console.log('Modal criar fechada');
    })
  }

}
