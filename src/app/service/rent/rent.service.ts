import { Injectable } from '@angular/core';
import {environment} from "../../../environments/environment.prod";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Rent} from "../../model/Rent";
import {Category} from "../../model/category/category";
import {RentWithoutServices} from "../../model/RentWithoutServices";

const RENT_API = `${environment.API_URL}/rents`;

@Injectable({
  providedIn: 'root'
})
export class RentService {

  constructor(private http: HttpClient) { }

  getAllRent(): Observable<Rent[]> {
    return this.http.get<Rent[]>(RENT_API);
  }

  getRentById(id: number): Observable<Rent> {
    return this.http.get<Rent>(`${RENT_API}/${id}`);
  }

  getAllRentForProvider(id: number): Observable<Rent[]> {
    return this.http.get<Rent[]>(`${RENT_API}/provider/${id}`);
  }

  getAllRentForPayer(id: number): Observable<Rent[]> {
    return this.http.get<Rent[]>(`${RENT_API}/payer/${id}`);
  }

  saveRent(rent: Rent): Observable<Rent> {
    // @ts-ignore
    return this.http.post<Rent>(RENT_API, rent);
  }

  saveSubRent(subRent: RentWithoutServices): Observable<Rent> {
    // @ts-ignore
    return this.http.post<Rent>(`${RENT_API}/subrent`, subRent);
  }

  updateRent(id: number, rent: Rent): Observable<Rent> {
    return this.http.put<Rent>(`${RENT_API}/${id}`, rent);
  }

  changeStatus(id : number, status : number) : Observable<Rent> {
    // @ts-ignore
    return this.http.put<Rent>(`${RENT_API}/${id}` + '?newStatus=' + status);
  }

  changeStatusAndFeedback(id : number, status : number, feedback: any) : Observable<Rent> {
    // @ts-ignore
    return this.http.put<Rent>(`${RENT_API}/feedback/${id}` + '?newStatus=' + status, feedback);
  }

  deleteRentById(id: number): Observable<Rent> {
    return this.http.delete<Rent>(`${RENT_API}/${id}`);
  }

}
