import {Component, OnInit} from '@angular/core';
import {User} from "../../model/User";
import {Rent} from "../../model/Rent";
import {RentService} from "../../service/rent/rent.service";
import {ActivatedRoute, ParamMap, Router} from "@angular/router";
import {UserService} from "../../service/user/user.service";
import {AngularFireStorage} from "@angular/fire/storage";
import {TokenService} from "../../service/in-out/token.service";
import Swal from 'sweetalert2';

@Component({
  selector: 'app-rent-payer',
  templateUrl: './rent-payer.component.html',
  styleUrls: ['./rent-payer.component.css']
})
export class RentPayerComponent implements OnInit {

  rents: Rent[] = [];
  rent: Rent = {};
  id!: number;
  idUser?: number;

  totalLength: any;
  page: number = 1;

  constructor(private rentService: RentService, private activatedRoute: ActivatedRoute, private router: Router,
              private userService: UserService, private angularFireStorage: AngularFireStorage,
              private tokenService: TokenService) {
  }

  ngOnInit(): void {
    this.idUser = this.tokenService.getJwt().id;
    this.activatedRoute.paramMap.subscribe((paramMap: ParamMap) => {
      // @ts-ignore
      this.id = +paramMap.get('id');
      // this.getUserbyId(this.id);
      this.getAllRentForPayer(this.id);
      console.log(this.id);
    })
  }

  getAllRentForPayer(id: number) {
    this.rentService.getAllRentForPayer(id).subscribe(rents => {
        this.rents = rents;
        this.totalLength = rents.length;
      }
    );
  }

  getRentById(id: any) {
    this.rentService.getRentById(id).subscribe(rent => this.rent = rent);
  }

  hidden = true;

  viewDetail() {
    this.hidden = !this.hidden;
  }

  changeStatus(id: any, status: number) {
    this.rentService.changeStatus(id, status).subscribe(data => {
      for (let r of this.rents) {
        if (r.id === id) r.status = data.status;
      };
      Swal.fire(
        'Thao tác thành công',
        '',
        'success'
      )
    })
  }
}
