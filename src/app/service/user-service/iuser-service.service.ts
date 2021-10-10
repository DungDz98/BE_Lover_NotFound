import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { IuserService } from 'src/app/models/userService/iuserService';
import { environment } from 'src/environments/environment';
import {User} from "../../models/user/user";

const API_URL = environment.API_URL + '/userservices';

@Injectable({
  providedIn: 'root'
})

export class IuserServiceService {

  constructor(private httpClient: HttpClient) { }
  getAll(): Observable<IuserService[]> {
    return this.httpClient.get<User[]>(API_URL);
  }
  create(userService: IuserService): Observable<IuserService> {
    return this.httpClient.post<IuserService>(API_URL, userService);
  }
  findByUserId(id: number): Observable<IuserService[]> {
    return this.httpClient.get<IuserService[]>(API_URL + `/${id}`);
  }
  updatePrice(id: number, usService: IuserService): Observable<IuserService>{
    return this.httpClient.put<IuserService>(API_URL + `/${id}`,usService);
  }

  getById(id: number): Observable<User> {
    return this.httpClient.get<User>(API_URL + `/${id}`)
  }
}
