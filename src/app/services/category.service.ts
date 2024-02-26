import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Category } from '../_models/category';

export const CATEGORY_DATA = [
  { name: 'Educação', guid: 'aaaa-bbbb-cccc-dddd' },
  { name: 'Saúde', guid: 'aaaa-bbbb-cccc-dddd' },
  { name: 'Trabalho', guid: 'aaaa-bbbb-cccc-dddd' },
  { name: 'Outros', guid: 'aaaa-bbbb-cccc-dddd' },
]

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  constructor() { }

  public getAllCategories(): Observable<Category[]>{
    return of(CATEGORY_DATA);
  }
}
