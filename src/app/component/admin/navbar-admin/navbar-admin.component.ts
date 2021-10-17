import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {Router} from "@angular/router";
import {Rent} from "../../../model/Rent";
import {UserService} from "../../../service/user/user.service";
import {RentService} from "../../../service/rent/rent.service";
import {CategoryService} from "../../../service/category/category.service";
import {Category} from "../../../model/category/category";
import {User} from "../../../models/user/user";
import {TokenService} from "../../../service/in-out/token.service";

@Component({
  selector: 'app-navbar-admin',
  templateUrl: './navbar-admin.component.html',
  styleUrls: ['./navbar-admin.component.css']
})
export class NavbarAdminComponent implements OnInit {
  rents: Rent[] = [];
  doneRents: Rent[] = [];
  category: Category[] = [];
  name!: String | undefined;
  avatar: string = '';
  users: User[] = [];
  idUser!: number;

//
  constructor(private userService: UserService, private rentService: RentService, private categoryService: CategoryService,
              private tokenService: TokenService, private router: Router) {
  }

  ngOnInit(): void {
    if (this.tokenService.getJwt()) {
      // @ts-ignore
      this.name = localStorage.getItem('userName');
      // @ts-ignore
      this.idUser = this.tokenService.getJwt().id;
      // @ts-ignore
      this.getAvatar(this.idUser);
    }
    // this.getAllByStatusCCDV3();
    // this.getAllUserSystem();
    this.getAllRent();
    this.getAllCategory();
    this.getAllUserSystem();
    this.getAllDoneRent();
  }

  getAllRent() {
    this.rentService.getAllRent().subscribe(data => {
      this.rents = data;
      // console.log(data)
    })
  }

  getAllCategory() {
    this.categoryService.getAll().subscribe(data => {
      this.category = data;
      // console.log(data)
    })
  }

  listUserToCCDV: User[] = [];
  listUserSystem: User[] = [];


  getAllUserSystem() {
    this.userService.getAll().subscribe(list => {
      this.listUserSystem = list;
    })
  }

  logout() {
    localStorage.removeItem('jwtResponse');
    localStorage.removeItem('userName');
    localStorage.removeItem('pw');
    window.location.href = "/login";
  }

  getAvatar(id: number) {
    // @ts-ignore
    this.userService.getById(id).subscribe(user => this.avatar = user.avatar);
  }

  getAllDoneRent(){
    this.rentService.getRentByStatus().subscribe((data) => {
      this.doneRents = data;
    })
  }
}
