import { Component, Input, OnInit } from '@angular/core';
import { CheckListItem } from '../_models/checklist_item';

@Component({
  selector: 'app-checklist-edit',
  templateUrl: './checklist-edit.component.html',
  styleUrls: ['./checklist-edit.component.css']
})
export class ChecklistEditComponent implements OnInit {

 public actionName = 'Editar';
 public checkListitem!: CheckListItem;

  constructor() { }

  ngOnInit(): void {
  }

  public onFormClose($event: any){
  }

}
