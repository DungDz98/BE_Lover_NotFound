import {Component, OnInit} from '@angular/core';
import {RentService} from "../../service/rent/rent.service";
import {ActivatedRoute, ParamMap, Router} from "@angular/router";
import {UserService} from "../../service/user/user.service";
import {AngularFireStorage} from "@angular/fire/storage";
import {User} from "../../model/User";
import {Rent} from "../../model/Rent";

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

  constructor(private rentService: RentService, private activatedRoute: ActivatedRoute, private router: Router,
              private userService: UserService, private angularFireStorage: AngularFireStorage) {
  }

  ngOnInit(): void {
    this.activatedRoute.paramMap.subscribe((paramMap: ParamMap) => {
      // @ts-ignore
      this.id = +paramMap.get('id');
      // this.getUserbyId(this.id);
      this.getAllRentForProvider(this.id);
      console.log(this.id);
    })
  }

  getAllRentForProvider(id: number) {
    this.rentService.getAllRentForProvider(id).subscribe(rents => this.rents = rents);
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
  changeStatusAndFeedback(id: any, status: number) {
    this.rentService.changeStatusAndFeedback(id ,status, this.feedback).subscribe(data =>{
      this.rent = data;
      alert('Thao tác thành công');
      window.location.reload()
    })
  }


  feedback: string = '';
  idFeedback!: number;
  open(idFeedback: any) {
    this.idFeedback = idFeedback;
  }

}
