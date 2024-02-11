import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-category-form',
  templateUrl: './category-form.component.html',
  styleUrls: ['./category-form.component.css']
})
export class CategoryFormComponent implements OnInit {

  public actionName= 'Editar';

  public categoryForm: FormGroup;

  constructor(private formBuilder: FormBuilder) { 

    this.categoryForm = this.formBuilder.group({
      name: 'Wendey',
      idade: '32',
      profissao: 'desenvolvedor'

    })


  }

  ngOnInit(): void {
  }

  public cancel(){
    console.log('Cancelar clicado');
  }

  public save(){
    console.log('salvar clicado');
  }

}
