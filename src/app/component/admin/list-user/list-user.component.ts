import { Component, OnInit } from '@angular/core';
import {User} from "../../../models/user/user";
import {UserService} from "../../../service/user/user.service";

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
  constructor(private userService: UserService) { }

  ngOnInit(): void {
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


