import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Category } from '../_models/category';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';


@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  constructor(private httpClient: HttpClient) { }

  public getAllCategories(): Observable<Category[]>{
    return this.httpClient.get<Category[]>(`${environment.apiBaseEndPointUrl}categories`);
  }

  public saveCategory(category: Category): Observable<string>{
    return this.httpClient.post<string>(`${environment.apiBaseEndPointUrl}categories`, category);
  }

  public updateCategory(category: Category): Observable<void>{
    return this.httpClient.put<void>(`${environment.apiBaseEndPointUrl}categories`, category);
  }

  public deleteCategory(guid: string): Observable<void>{
    return this.httpClient.delete<void>(`${environment.apiBaseEndPointUrl}categories/${guid}`);
  }
}
