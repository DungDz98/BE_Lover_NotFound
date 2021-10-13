import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { IUserService } from 'src/app/models/userService/iuserService';
import { environment } from 'src/environments/environment';
import {User} from "../../models/user/user";
import {Rent} from "../../model/Rent";

const API_URL = environment.API_URL + '/userservices';

@Injectable({
  providedIn: 'root'
})

export class UserServiceService {

  constructor(private httpClient: HttpClient) { }
  getAll(): Observable<IUserService[]> {
    return this.httpClient.get<User[]>(API_URL);
  }
  create(userService: IUserService): Observable<IUserService> {
    return this.httpClient.post<IUserService>(API_URL, userService);
  }
  findByUserId(id: number): Observable<IUserService[]> {
    return this.httpClient.get<IUserService[]>(`${API_URL}/${id}`);
  }
  findOne(id: number): Observable<IUserService> {
    return this.httpClient.get<IUserService>(API_URL +"/findOne" + `/${id}`);
  }
  getById(id: number): Observable<User> {
    return this.httpClient.get<User>(API_URL + `/${id}`)
  }
}
