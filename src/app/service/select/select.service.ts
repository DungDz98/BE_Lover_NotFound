import { Injectable } from '@angular/core';
import {environment} from '../../../environments/environment';
import {HttpClient} from "@angular/common/http";
import {User} from "../../models/user/user";
import {Observable} from "rxjs";
import {City} from "../../models/city";
import {UserTest} from "../../models/selectInHome/user-test";

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

  findUserByCity(nameCity: String): Observable<User[]>{
    return this.httpClient.get<User[]>(API_URL + `/city/${nameCity}`);
  }

  findUserByGender(gender: String): Observable<User[]>{
    return this.httpClient.get<User[]>(API_URL + `/gender/${gender}`)
  }

  findUserHaveCategory(){
    return this.httpClient.get<UserTest[]>(API_URL + `/test`)
  }

  getAllGoiY(gender: String | undefined) {
    return this.httpClient.get<UserTest[]>(API_URL + `/suggestions?gender=` + gender);
  }

}
