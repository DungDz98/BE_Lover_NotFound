import {HttpClient} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {Observable} from 'rxjs/internal/Observable';
import {User} from 'src/app/models/user/user';
import {environment} from "../../../environments/environment.prod";

const API_URL = environment.API_URL + '/ccdv';
const USER_API = `${environment.API_URL}/users`;
const ADMIN_API = environment.API_URL + '/admin';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private httpClient: HttpClient) {
  }

  getAll(): Observable<User[]> {
    return this.httpClient.get<User[]>(API_URL);
  }

  saveUser(id: number, user: User): Observable<User> {
    // @ts-ignore
    return this.httpClient.put<User>(API_URL + `/${id}`, user);
  }

  getById(id: number): Observable<User> {
    return this.httpClient.get<User>(API_URL + `/${id}`)
  }

  getUserById(id: number): Observable<User> {
    return this.httpClient.get<User>(`${USER_API}/${id}`);
  }

  changeStatusCCDV(id: number): Observable<User> {
    // @ts-ignore
    return this.httpClient.put<User>(`${API_URL}/statusccdv/${id}`);
  }
  changeStatusUser(id: number, statusUs: number): Observable<User> {
    // @ts-ignore
    return this.httpClient.put<User>(`${ADMIN_API}/users/statusUs/${id}?statusUs=${statusUs}`);
  }
  changeVipStatus(id: number): Observable<User> {
    // @ts-ignore
    return this.httpClient.put<User>(`${ADMIN_API}/users/vip/${id}`);
  }

  updateUser(user: User): Observable<User> {
    return this.httpClient.put<User>(`${USER_API}/update`, user);
  }
  editAvatar(user: User, id: number): Observable<User> {
    return this.httpClient.put<User>(USER_API+"/"+id+"/editAvatar",user)
  }

}
