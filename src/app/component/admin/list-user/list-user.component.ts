import { Component, OnInit } from '@angular/core';
import {User} from "../../../models/user/user";
import {UserService} from "../../../service/user/user.service";
import {TokenService} from "../../../service/in-out/token.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-list-user',
  templateUrl: './list-user.component.html',
  styleUrls: ['./list-user.component.css']
})
export class ListUserComponent implements OnInit {
  listUser: User[] = [];
  totalLength: any;
  page: number = 1;
  // @ts-ignore
  user: User = {};
  constructor(private userService: UserService,
              private tokenService: TokenService,
              private router: Router) {
    this.checkTonken()
  }
  roles = [];
  // @ts-ignore
  jwt: JwtResponse = JSON.parse(localStorage.getItem('jwtResponse'));
  checkTonken() {
    console.log(this.jwt.roles)
    if (!this.jwt){
      this.router.navigate([''])
    }else {
      // @ts-ignore
      for (let i = 0; i < this.jwt.roles?.length; i++) {
        // @ts-ignore
        if (this.jwt.roles[i].authority === 'ROLE_ADMIN'){
          // @ts-ignore
          this.roles.push(this.jwt.roles[i])
        }
      }
      if (this.roles.length != 0){}
      else {
        this.router.navigate(['error-403'])
      }

    }
  }

  ngOnInit(): void {
    console.log(this.tokenService.getJwt().roles)
// @ts-ignore
    if (this.tokenService.getJwt().roles === "ROLE_USER"){
      this.router.navigate(["error-403"])
    }
    this.getAllUser();
  }

  getAllUser() {
    this.userService.getAll().subscribe(users => {
      this.listUser = users;
      this.totalLength = users.length;
    });
  }

  getUserById(id: number | undefined) {
    // @ts-ignore
    this.userService.getUserById(id).subscribe(user => this.user = user);
  }

  changeStatusUser(id: number | undefined, statusUs: number) {
    // @ts-ignore
    this.userService.changeStatusUser(id, statusUs).subscribe(resp => {
      for (let u of this.listUser) {
        if (u.id === id) {
          u.statusUs = resp.statusUs;
        }
      }
    })
  }

  changeVipStatus(id: number | undefined) {
    // @ts-ignore
    this.userService.changeVipStatus(id).subscribe(resp => {
      for (let u of this.listUser) {
        if (u.id === id) u.statusCCDV = resp.statusCCDV;
      }

      // window.location.reload();
    })
  }
}


