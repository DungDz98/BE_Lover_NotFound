import { Component, OnInit } from '@angular/core';
import {User} from "../../model/User";
import {Rent} from "../../model/Rent";
import {RentService} from "../../service/rent/rent.service";
import {ActivatedRoute, ParamMap, Router} from "@angular/router";
import {UserService} from "../../service/user/user.service";
import {AngularFireStorage} from "@angular/fire/storage";

@Component({
  selector: 'app-rent-payer',
  templateUrl: './rent-payer.component.html',
  styleUrls: ['./rent-payer.component.css']
})
export class RentPayerComponent implements OnInit {

  rents: Rent[] = [];
  rent: Rent = {};
  id!: number;

  constructor(private rentService: RentService, private activatedRoute: ActivatedRoute, private router: Router,
              private userService: UserService, private angularFireStorage: AngularFireStorage) {
  }

  ngOnInit(): void {
    this.activatedRoute.paramMap.subscribe((paramMap: ParamMap) => {
      // @ts-ignore
      this.id = +paramMap.get('id');
      // this.getUserbyId(this.id);
      this.getAllRentForPayer(this.id);
      console.log(this.id);
    })
  }

  getAllRentForPayer(id: number) {
    this.rentService.getAllRentForPayer(id).subscribe(rents => this.rents = rents);
  }

  getRentById(id: any) {
    this.rentService.getRentById(id).subscribe(rent => this.rent = rent);
  }

  hidden = true;
  viewDetail(){
    this.hidden = !this.hidden;
  }

  changeStatus(id: any, status: number) {
    this.rentService.changeStatus(id ,status).subscribe(data =>{
      this.rent = data;
      alert('Thao tác thành công');
      window.location.reload()
    })
  }
}
