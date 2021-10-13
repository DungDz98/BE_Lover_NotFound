import {Component, OnInit} from '@angular/core';
import {AuthService} from "../../../service/in-out/auth.service";
import {TokenService} from "../../../service/in-out/token.service";
import {UserService} from "../../../service/user/user.service";
import {Router} from "@angular/router";


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

  constructor(private tokenService: TokenService, private userService: UserService, private router: Router) {
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
        // @ts-ignore
        if (data.statusCCDV > 0) {
          this.notCCDV = false;
        }
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
    this.userService.changeStatusCCDV(this.idUser).subscribe(() => {
      alert('Thay đổi trạng thái thành công');
      window.location.reload();
    })

  }
}
