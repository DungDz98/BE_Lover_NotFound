import {Component, OnInit} from '@angular/core';
import {AuthService} from "../../../service/in-out/auth.service";
import {TokenService} from "../../../service/in-out/token.service";
import {UserService} from "../../../service/user/user.service";
import {Router} from "@angular/router";
import {DataService} from "../../../service/data/data.service";
import Swal from "sweetalert2";


@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  idUser!: number | undefined;
  name!: String | undefined;
  notCCDV: boolean = true;
  avatar: string = '';
  status: number = 0;

  constructor(private tokenService: TokenService, private userService: UserService, private router: Router,
              private data: DataService) {
  }

  ngOnInit(): void {
    if (this.tokenService.getJwt()) {
      this.idUser = this.tokenService.getJwt().id;
      // @ts-ignore
      this.name = localStorage.getItem('userName');
      // @ts-ignore
      this.getAvatar(this.idUser);


      // @ts-ignore
      this.userService.getById(this.idUser).subscribe(data => {
        this.data.currentStatus.subscribe(status => {
          if (status != 0) {
            this.notCCDV = false;
          } else {
            // @ts-ignore
            if (data.statusCCDV > 0) {
              this.notCCDV = false;
            }
          }
        })


      })


    }
  }

  getAvatar(id: number) {
    // @ts-ignore
    this.userService.getById(id).subscribe(user => this.avatar = user.avatar);
  }

  logout() {
    localStorage.removeItem('jwtResponse');
    localStorage.removeItem('userName');
    localStorage.removeItem('pw');
    window.location.href = "/login";
  }

  changeStatusCCDV() {
    // @ts-ignore
    this.userService.changeStatusCCDV(this.idUser).subscribe(resp => {
      Swal.fire(
        'Thay đổi trạng thái thành công',
        '',
        'success'
      );
      // window.location.reload();
    })

  }
}
