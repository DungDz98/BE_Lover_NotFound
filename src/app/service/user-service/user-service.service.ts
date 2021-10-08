import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { UserService } from 'src/app/models/userService/userService';
import { environment } from 'src/environments/environment';
import {User} from "../../models/user/user";

const API_URL = environment.API_URL + '/userservices';

@Injectable({
  providedIn: 'root'
})

export class UserServiceService {

  constructor(private httpClient: HttpClient) { }
  getAll(): Observable<UserService[]> {
    return this.httpClient.get<User[]>(API_URL);
  }
  create(userService: UserService): Observable<UserService> {
    return this.httpClient.post<UserService>(API_URL, userService);
  }
  findByUserId(id: number): Observable<UserService[]> {
    return this.httpClient.get<UserService[]>(API_URL + `/${id}`);
  }
}
