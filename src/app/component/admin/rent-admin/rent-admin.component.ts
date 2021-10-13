import { Component, OnInit } from '@angular/core';
import {User} from "../../../model/User";
import {Rent} from "../../../model/Rent";
import {RentService} from "../../../service/rent/rent.service";
import {ActivatedRoute, ParamMap, Router} from "@angular/router";
import {UserService} from "../../../service/user/user.service";
import {AngularFireStorage} from "@angular/fire/storage";

@Component({
  selector: 'app-rent-admin',
  templateUrl: './rent-admin.component.html',
  styleUrls: ['./rent-admin.component.css']
})
export class RentAdminComponent implements OnInit {

  // @ts-ignore
  user: User = {};

  rents: Rent[] = [];
  rent: Rent = {};
  id!: number;
  totalLength: any;
  page: number = 1;

  constructor(private rentService: RentService, private activatedRoute: ActivatedRoute, private router: Router,
              private userService: UserService, private angularFireStorage: AngularFireStorage) {
  }

  ngOnInit(): void {
this.getAllRent();
  }
getAllRent(){
  this.rentService.getAllRent().subscribe((data) => {
    this.rents = data;
  })
}
  // getAllRentForProvider(id: number) {
  //   this.rentService.getAllRentForProvider(id).subscribe(rents => {
  //     this.rents = rents;
  //     this.totalLength = rents.length;
  //   });
  // }

  getRentById(id: any) {
    this.rentService.getRentById(id).subscribe(rent => this.rent = rent);
  }
  // changeStatus(id: any, status: number) {
  //   this.rentService.changeStatus(id ,status).subscribe(data =>{
  //     this.rent = data;
  //     alert('Thao tác thành công');
  //     window.location.reload()
  //   })
  // }
  // changeStatusAndFeedback(id: any, status: number) {
  //   this.rentService.changeStatusAndFeedback(id ,status, this.feedback).subscribe(data =>{
  //     this.rent = data;
  //     alert('Thao tác thành công');
  //     window.location.reload()
  //   })
  // }
  //
  //
  // feedback: string = '';
  // idFeedback!: number;
  // open(idFeedback: any) {
  //   this.idFeedback = idFeedback;
  // }
  //
  // deleteRentById(id: number | undefined) {
  //   console.log(id);
  //   // @ts-ignore
  //   this.rentService.deleteRentById(id).subscribe(() => {
  //     alert("Thành công!");
  //     window.location.reload();
  //   })
  // }

}
