import { Component, OnInit } from '@angular/core';
import { CATEGORY_DATA } from '../category/category.component';

export const CHECKLIST_DATA = [
  { guid: 'aaa-bbb-ccc-ddd', completed: false, description: 'ir ao ortopedista', deadline: Date.now(),
  category: CATEGORY_DATA.find(x =>x.name=='Saúde')
 },
 { guid: 'aaa-bbb-ccc-ddd', completed: true, description: 'Reunião com o time', deadline: Date.now(),
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

  constructor() { }

  ngOnInit(): void {
  }

  public createNewItem(){
    console.log('criar novo item do checklist clicado')
  }

}
