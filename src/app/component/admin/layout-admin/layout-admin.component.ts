import { Component, OnInit } from '@angular/core';
import {TokenService} from "../../../service/in-out/token.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-layout-admin',
  templateUrl: './layout-admin.component.html',
  styleUrls: ['./layout-admin.component.css']
})
export class LayoutAdminComponent implements OnInit {

  constructor(private tokenService: TokenService,
              private router: Router) { }

  ngOnInit(): void {
// @ts-ignore
    if (this.tokenService.getJwt().roles !== "ADMIN"){
  this.router.navigate(["error-403"])
}
  }

}
