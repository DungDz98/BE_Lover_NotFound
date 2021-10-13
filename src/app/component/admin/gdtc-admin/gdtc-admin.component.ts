import { Component, OnInit } from '@angular/core';
import {User} from "../../../model/User";
import {Rent} from "../../../model/Rent";
import {RentService} from "../../../service/rent/rent.service";
import {ActivatedRoute, Router} from "@angular/router";
import {UserService} from "../../../service/user/user.service";
import {AngularFireStorage} from "@angular/fire/storage";

@Component({
  selector: 'app-gdtc-admin',
  templateUrl: './gdtc-admin.component.html',
  styleUrls: ['./gdtc-admin.component.css']
})
export class GdtcAdminComponent implements OnInit {

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
    this.rentService.getRentByStatus().subscribe((data) => {
      this.rents = data;
    })
  }
  getRentById(id: any) {
    this.rentService.getRentById(id).subscribe(rent => this.rent = rent);
  }

}
