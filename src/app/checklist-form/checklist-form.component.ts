import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { CheckListItem } from '../_models/checklist_item';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-checklist-form',
  templateUrl: './checklist-form.component.html',
  styleUrls: ['./checklist-form.component.css']
})
export class ChecklistFormComponent implements OnInit {

  @Input() public actionName = 'Editar';
  @Input() public checkListitem!: CheckListItem;
  @Output() public formCloseEvent: EventEmitter<boolean> = new EventEmitter<boolean>();


  public checkListForm!: FormGroup;


  constructor(private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.checkListForm = this.formBuilder.group(
      {
        completed: [this.checkListitem != null ? this.checkListitem.completed : false, Validators.required],
        description: [this.checkListitem != null ? this.checkListitem.description : '', Validators.required],
        deadline: [this.checkListitem != null ? this.checkListitem.deadline : new Date(), Validators.required],
        category: [this.checkListitem != null ? this.checkListitem.category : null, Validators.required],
      }
    );
  }

  public closeForm(){

  }

}
