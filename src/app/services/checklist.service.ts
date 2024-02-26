import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { CheckListItem } from '../_models/checklist_item';

export const CHECKLIST_DATA = [
  { guid: 'aaa-bbb-ccc-ddd', completed: false, description: 'Ir ao oftalmologista', deadline: new Date(), postDate: new Date(),
    category: { guid: 'aaaa-bbb-cccc-dddd', name: 'Saúde'}
  },
  { guid: 'aaa-bbb-ccc-ddd', completed: true, description: 'Reunião com o gerente regional', deadline: new Date(), postDate: new Date(),
  category: { guid: 'aaaa-bbb-cccc-dddd', name: 'Trabalho'}
  }
];

@Injectable({
  providedIn: 'root'
})
export class ChecklistService {

  constructor() { }

  public getAllChecklistItems(): Observable<CheckListItem[]>{
      return of(CHECKLIST_DATA);
  }
}