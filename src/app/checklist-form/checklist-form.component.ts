import { Component, EventEmitter, Input, OnInit, Output, ViewChild } from '@angular/core';
import { CheckListItem } from '../_models/checklist_item';
import { FormBuilder, FormGroup, FormGroupDirective, Validators } from '@angular/forms';
import { Category } from '../_models/category';
import { CategoryService } from '../services/category.service';

@Component({
  selector: 'app-checklist-form',
  templateUrl: './checklist-form.component.html',
  styleUrls: ['./checklist-form.component.css']
})
export class ChecklistFormComponent implements OnInit {

  @Input() public actionName = 'Editar';
  @Input() public checkListitem!: CheckListItem;
  @Output() public formCloseEvent: EventEmitter<boolean> = new EventEmitter<boolean>();

  @ViewChild(FormGroupDirective) checklistFormGroupDirective!: FormGroupDirective;

  public categories: Category[]  = [];


  public checklistForm!: FormGroup;


  constructor(private formBuilder: FormBuilder, private categoryServices: CategoryService) { }

  ngOnInit(): void {

    this.categoryServices.getAllCategories().subscribe(
      (resp: Category[]) => {
        this.categories = resp;
        this.createForm();

      }
    );   
  }

  private createForm(){
    this.checklistForm = this.formBuilder.group(
      {
        completed: [this.checkListitem != null ? this.checkListitem.completed : false, Validators.required],
        description: [this.checkListitem != null ? this.checkListitem.description : '', Validators.required],
        deadline: [this.checkListitem != null ? this.checkListitem.deadline : new Date(), Validators.required],
        category: [this.checkListitem != null ? this.checkListitem.category : null, Validators.required],
      }
    );
  }

  public clearForm(){
    this.checklistForm.reset();
    this.checklistFormGroupDirective.resetForm();

  }

  public save(){
    this.formCloseEvent.emit(true);
  }

  public cancel(){
    this.formCloseEvent.emit(false);
    
  }

}
