import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { CheckListItem } from '../_models/checklist_item';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ChecklistService {

  constructor(private httpClient: HttpClient) { }

  public getAllChecklistItems(): Observable<CheckListItem[]>{
      return this.httpClient.get<CheckListItem[]>(`${environment.apiBaseEndPointUrl}checklist-items`)
  }

  public saveChecklistItems(CheckListItem: CheckListItem): Observable<string>{
    return this.httpClient.post<string>(`${environment.apiBaseEndPointUrl}checklist-items`, CheckListItem)
  }

  public updateChecklistItems(CheckListItem: CheckListItem): Observable<CheckListItem[]>{
    return this.httpClient.put<CheckListItem[]>(`${environment.apiBaseEndPointUrl}checklist-items`, CheckListItem)
  }

  public deleteChecklistItems(guid: string): Observable<void>{
    return this.httpClient.get<void>(`${environment.apiBaseEndPointUrl}checklist-items/${guid}`)
  }
}