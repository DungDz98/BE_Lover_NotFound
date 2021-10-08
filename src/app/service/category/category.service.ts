import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { environment } from 'src/environments/environment';

import {Category} from "../../models/category/category";
const API_URL = environment.API_URL + '/category';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  constructor(private httpClient: HttpClient) {

  }
  findAll(): Observable<Category[]> {
    return this.httpClient.get<Category[]>(API_URL);
  }

  findById(id: number): Observable<Category> {
    return this.httpClient.get<Category>(API_URL + `/${id}`);
  }
  deleteById(id : number) : Observable<CategoryService> {
    return this.httpClient.delete<CategoryService>(API_URL + '/delete/' + id);
  }
  createCategory(category : Category) :Observable<Category>{
    return this.httpClient.post<Category>(API_URL , category);
  }
  save(id: number,category : Category): Observable<Category>{
    return this.httpClient.put<Category>(API_URL + '/' + id , category);
  }

}
