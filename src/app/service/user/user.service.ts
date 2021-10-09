import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { User } from 'src/app/models/user/user';
import { environment } from 'src/environments/environment';
import {environment} from "../../../environments/environment.prod";
const API_URL = environment.API_URL + '/ccdv';
const USER_API = `${environment.API_URL}/users`;

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private httpClient: HttpClient) { }
  getAll(): Observable<User[]> {
    return this.httpClient.get<User[]>(API_URL);
  }
  saveUser(id: number,user : User): Observable<User> {
    // @ts-ignore
    return this.httpClient.put<User>(API_URL + `/${id}` ,user );
  }
  getById(id: number): Observable<User> {
    return this.httpClient.get<User>(API_URL + `/${id}`)
  }
  getUserById(id: number): Observable<User> {
    return this.httpClient.get<User>(`${USER_API}/${id}`);
  }
}
