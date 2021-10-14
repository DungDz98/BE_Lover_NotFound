import {Component, OnInit} from '@angular/core';
import {RentService} from "../../service/rent/rent.service";
import {ActivatedRoute, ParamMap, Router} from "@angular/router";
import {UserService} from "../../service/user/user.service";
import {AngularFireStorage} from "@angular/fire/storage";
import {User} from "../../model/User";
import {Rent} from "../../model/Rent";
import {TokenService} from "../../service/in-out/token.service";
import Swal from 'sweetalert2';

@Component({
  selector: 'app-rent',
  templateUrl: './rent.component.html',
  styleUrls: ['./rent.component.css']
})
export class RentComponent implements OnInit {
  // @ts-ignore
  user: User = {};

  rents: Rent[] = [];
  rent: Rent = {};
  id!: number;
  totalLength: any;
  page: number = 1;
  index?: number;
  idUser?: number;

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
      this.getAllRentForProvider(this.id);
      console.log(this.id);
    })
  }

  getAllRentForProvider(id: number) {
    this.rentService.getAllRentForProvider(id).subscribe(rents => {
      this.rents = rents;
      this.totalLength = rents.length;
    });
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
      for (let r of this.rents) {
        if (r.id === id) r.status = data.status;
      };
      Swal.fire(
        'Thao tác thành công',
        '',
        'success'
      )

      // alert('Thao tác thành công');
      // window.location.reload()
    })
  }
  changeStatusAndFeedback(id: any, status: number) {
    this.rentService.changeStatusAndFeedback(id ,status, this.feedback).subscribe(data =>{
      // @ts-ignore
      for (let r of this.rents) {
        if (r.id === id) r.status = data.status;
      };
      Swal.fire(
        'Bạn đã phản hồi thành công',
        '',
        'success'
      )
      // alert('Thao tác thành công');
      // window.location.reload()
    })
  }


  feedback: string = '';
  idFeedback!: number;
  open(idFeedback: any) {
    this.idFeedback = idFeedback;
  }

  deleteRentById(id: number | undefined) {
    console.log(id);
    // @ts-ignore
    this.rentService.deleteRentById(id).subscribe(() => {

        // alert("Thành công!");
        // window.location.reload();
      // this.rents = this.rents.filter(rent => rent.id !== id);
    });
    for (let i = 0; i < this.rents.length; i++) {
      if (this.rents[i].id == id) this.rents.splice(i, 1);
    };
    Swal.fire(
      'Huỷ đơn thành công',
      '',
      'success'
    )
  }

}
