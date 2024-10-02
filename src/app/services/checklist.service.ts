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
    return this.httpClient.get<CheckListItem[]>(`${environment.apiBaseEndPointUrl}checklist-items`);
}

public saveChecklistItem(checklistItem: CheckListItem): Observable<string>{
  return this.httpClient.post<string>(`${environment.apiBaseEndPointUrl}checklist-items`, checklistItem);
}

public updateChecklistItems(checklistItem: CheckListItem) : Observable<void>{
  return this.httpClient.put<void>(`${environment.apiBaseEndPointUrl}checklist-items`, checklistItem);
}

public deleteChecklistItem(guid: string): Observable<void>{
  return this.httpClient.delete<void>(`${environment.apiBaseEndPointUrl}checklist-items/${guid}`);
}

public updateCompleteStatus(guid: string, status: boolean) : Observable<void>{
  return this.httpClient.patch<void>(`${environment.apiBaseEndPointUrl}checklist-items/${guid}`, { isComplete: status});
}
}