import { Component, OnInit } from '@angular/core';
import {TokenService} from "../../service/in-out/token.service";
import {UserService} from "../../service/user/user.service";

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.css']
})
export class LayoutComponent implements OnInit {


  idUser!: number | undefined;
  name!: String | undefined;

  constructor(private tokenService: TokenService, private userService: UserService) {
  }

  ngOnInit(): void {
    if (this.tokenService.getJwt()) {
      this.idUser = this.tokenService.getJwt().id;
      // @ts-ignore
      this.name = localStorage.getItem('userName');


      // @ts-ignore
      this.userService.getById(this.idUser).subscribe(data=>{
      })
    }
  }
}
