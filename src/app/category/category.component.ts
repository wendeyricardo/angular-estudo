import { Component, OnInit } from '@angular/core';
import { Category } from '../_models/category';

export const CATEGORY_DATA = [
  {name: 'Educação', guid: 'aaaa-bbbb-cccc-dddd'},
  {name: 'Saúde', guid: 'aaaa-bbbb-cccc-dddd'},
  {name: 'Trabalho', guid: 'aaaa-bbbb-cccc-dddd'},
  {name: 'Outros', guid: 'aaaa-bbbb-cccc-dddd'},
]

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css']
})
export class CategoryComponent implements OnInit {

  displayedColumns: string[] = ['id', 'name', 'actions'];
  public dataSource: Category[] = CATEGORY_DATA;

  constructor() { }

  ngOnInit(): void {
  }

  public editCategory(category: Category){
    console.log('edit new category clicked');
  }

  public deleteCategory(category: Category){
    console.log('delete new category clicked');
  }

  public createNewCategory(){
    console.log('create new category clicked');
  }

}
