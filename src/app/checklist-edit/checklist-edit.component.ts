import { Component, Inject, Input, OnInit } from '@angular/core';
import { CheckListItem } from '../_models/checklist_item';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-checklist-edit',
  templateUrl: './checklist-edit.component.html',
  styleUrls: ['./checklist-edit.component.css']
})
export class ChecklistEditComponent implements OnInit {

 public actionName = 'Editar';
 public checkListItem!: CheckListItem;

  constructor(public modalRef: MatDialogRef<ChecklistEditComponent>, @Inject(MAT_DIALOG_DATA) public data: any) { 

    if(data.updatableChecklistItem != null){
      this.checkListItem =  data.updatableChecklistItem;
    }
    
    if(data.actionName != null){
      this.actionName =  data.actionName;
    }
  }

  ngOnInit(): void {
  }

  public onFormClose($event: any){
    this.modalRef.close();
  }

}
