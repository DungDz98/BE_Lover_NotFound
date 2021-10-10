import { Injectable } from '@angular/core';
import {JwtResponse} from '../../model/in-out/jwt-response';

@Injectable({
  providedIn: 'root'
})
export class TokenService {
  private jwt: JwtResponse = {};
  constructor() { }
  public getJwt(): JwtResponse {
    // @ts-ignore
    return  JSON.parse(localStorage.getItem('jwtResponse'));
  }

  public setJwt(jwtResponse: JwtResponse): void {
    this.jwt = jwtResponse;
    localStorage.removeItem('jwtResponse');
    localStorage.setItem('jwtResponse', JSON.stringify(jwtResponse));
  }


}
