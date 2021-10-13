import { Component, OnInit } from '@angular/core';
import {SelectService} from "../../../../service/select/select.service";

@Component({
  selector: 'app-profile-user',
  templateUrl: './profile-user.component.html',
  styleUrls: ['./profile-user.component.css']
})
export class ProfileUserComponent implements OnInit {

  constructor(private select: SelectService) { }

  ngOnInit(): void {
  }

}
