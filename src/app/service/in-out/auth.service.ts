import { Injectable } from '@angular/core';
import {environment} from '../../../environments/environment';
import {HttpClient} from '@angular/common/http';
import {SignUpForm} from '../../model/in-out/sign-up-form';
import {Observable} from 'rxjs';
import {SignInForm} from '../../model/in-out/sign-in-form';
import {JwtResponse} from '../../model/in-out/jwt-response';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private API_REGISTER = environment.API_URL + '/register';
  private API_LOGIN = environment.API_URL + '/login';

  constructor(private http: HttpClient) { }

  register(signUp: SignUpForm): Observable<any>{
    return this.http.post<any>(this.API_REGISTER, signUp);
  }
  login(signIn: SignInForm): Observable<JwtResponse>{
    return this.http.post<JwtResponse>(this.API_LOGIN, signIn);
  }
}
