import { Injectable } from '@angular/core';
import {environment} from '../../../environments/environment';
import {HttpClient} from "@angular/common/http";
import {User} from "../../models/user/user";
import {Observable} from "rxjs";
import {City} from "../../models/city";

const API_URL = environment.API_URL + '/selectByRequests'
@Injectable({
  providedIn: 'root'
})

export class SelectService {
  constructor(private httpClient: HttpClient){}

  getAllSelectRequest(){
    return  this.httpClient.get<User[]>(API_URL);
  }

  findByName(name: String){
    return this.httpClient.get<User[]>(API_URL + `/name/${name}`)
  }

  findCity(): Observable<City[]> {
      return this.httpClient.get<City[]>('https://provinces.open-api.vn/api/p/');

  }

}
