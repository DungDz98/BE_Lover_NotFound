import { Injectable } from '@angular/core';
import {environment} from '../../../environments/environment';
import {HttpClient} from "@angular/common/http";
import {User} from "../../models/user/user";

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

}
