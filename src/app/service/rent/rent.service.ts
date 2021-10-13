import { Injectable } from '@angular/core';
import {environment} from "../../../environments/environment.prod";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Rent} from "../../model/Rent";
import {Category} from "../../model/category/category";
import {RentWithoutServices} from "../../model/RentWithoutServices";

const RENT_API = `${environment.API_URL}/rents`;
const RENT_API1 = `${environment.API_URL}/admin`;

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

  getAllRent1(): Observable<Rent[]> {
    return this.http.get<Rent[]>(RENT_API1+'/rent');
  }
getRentById1(id : number): Observable<Rent>{
    return  this.http.get<Rent>(RENT_API1+'/rent'+`/${id}`);
}

getRentByStatus(): Observable<Rent[]>{
    return this.http.get<Rent[]>(RENT_API1+'/transaction');
}
//   @GetMapping("/users")
//   public ResponseEntity<Iterable<User>> findAllUser(){
//     Iterable<User> users = userService.findAll();
//     return new ResponseEntity<>(users, HttpStatus.OK);
//   }
//   @GetMapping("/categories")
//   public ResponseEntity<Iterable<Category>> findAllCategory(){
//     Iterable<Category> categoryServices = categoryService.findAll();
//     return new ResponseEntity(categoryServices,HttpStatus.OK);
//   }
//   @GetMapping("/rent")
//   public ResponseEntity<Iterable<Rent>> getAllRent(){
//     Iterable<Rent> rents = rentService.findAll();
//     return new ResponseEntity<>(rents,HttpStatus.OK);
//   }
//   @GetMapping("/rentDetail/{id}")
//   public ResponseEntity<Iterable<RentDetail>> findAllByRentId(@PathVariable Long id){
//   Iterable<RentDetail> rent_details = rentDetailService.findByRentId(id);
//   return new ResponseEntity<>(rent_details,HttpStatus.OK);
// }
// @GetMapping("/rent/{id}")
// public ResponseEntity<Rent> findById(@PathVariable Long id){
//   Optional<Rent> rentOptional = rentService.findById(id);
//   return new ResponseEntity(rentOptional,HttpStatus.OK);
// }

}
