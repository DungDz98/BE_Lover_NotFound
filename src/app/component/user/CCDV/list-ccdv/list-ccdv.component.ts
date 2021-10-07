import { Component, OnInit } from '@angular/core';
import {SelectService} from "../../../../sevice/select/select.service";
import {User} from "../../../../models/user/user";
import {City} from "../../../../models/city";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";

@Component({
  selector: 'app-list-ccdv',
  templateUrl: './list-ccdv.component.html',
  styleUrls: ['./list-ccdv.component.css']
})
export class ListCcdvComponent implements OnInit {

  listUserCCDV: User[] = [];
  city: City[] = []
  page = 1;
  size!: number;
  constructor(private select: SelectService, private http: HttpClient) { }

  ngOnInit(): void {
    this.select.getAllSelectRequest().subscribe((data)=>{
      this.listUserCCDV = data;
      this.size = data.length
    })
    this.getListCity();
  }


  getListCity(){
    this.select.findCity().subscribe((data)=>{
      this.city = data;
    })
  }

}
