import { Component, OnInit } from '@angular/core';
import {SelectService} from "../../../../service/select/select.service";
import {City} from "../../../../models/city";
import {User} from "../../../../model/user/user";
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {UserService} from "../../../../service/user/user.service";
import {HttpClient} from "@angular/common/http";
import {ActivatedRoute} from "@angular/router";
import {TokenService} from "../../../../service/in-out/token.service";

@Component({
  selector: 'app-profile-user',
  templateUrl: './profile-user.component.html',
  styleUrls: ['./profile-user.component.css']
})
export class ProfileUserComponent implements OnInit {
  city1: City[] =[];
  user!: User;
  userForm!: FormGroup;
  idUser!: number;
  constructor(private select: SelectService, private userService: UserService, private http: HttpClient, private activatedRoute:ActivatedRoute, private  tokenService: TokenService) { }

  ngOnInit(): void {
    this.getListCity();
    this.userForm = new FormGroup({
      id: new FormControl(),
      userName: new FormControl(),
      password: new FormControl(),
      name: new FormControl(),
      dateOfBirth: new FormControl(),
      gender: new FormControl(),
      city: new FormControl(''),
      nationality: new FormControl(),
      avatar: new FormControl(),
      height: new FormControl(),
      weight: new FormControl(),
      hobby: new FormControl(),
      description: new FormControl(),
      requestToPayer: new FormControl(),
      linkFb: new FormControl(),
      statusCCDV: new FormControl(),
      createAtCCDV: new FormControl(),
      price: new FormControl(),
      email: new FormControl(),
      phoneNumber: new FormControl(),
      status: new FormControl(true)
    });

    this.activatedRoute.paramMap.subscribe(data => {
      this.idUser = parseInt(data.get('id')!)
      this.showEditUser(this.idUser);
    });
  }

  getListCity() {
    this.select.findCity().subscribe((data) => {
      this.city1 = data;
    })
  }

  updateUser(){
    this.userService.updateUser(this.userForm.value).subscribe((data)=>{
      alert("oke");
    })
  }

  showEditUser(id: number) {
    this.http.get<User>(`http://localhost:8080/ccdv/${id}`).subscribe((data) => {
      this.userForm = new FormGroup(
        {
          id: new FormControl(data.id),
          userName: new FormControl(data.userName),
          password: new FormControl(data.password),
          name: new FormControl(data.name),
          dateOfBirth: new FormControl(data.dateOfBirth),
          gender: new FormControl(data.gender),
          city: new FormControl(data.city),
          nationality: new FormControl(data.nationality),
          avatar: new FormControl(data.avatar),
          height: new FormControl(data.height),
          weight: new FormControl(data.weight),
          hobby: new FormControl(data.hobby),
          description: new FormControl(data.description),
          requestToPayer: new FormControl(data.requestToPayer),
          linkFb: new FormControl(data.linkFb),
          statusCCDV: new FormControl(data.statusCCDV),
          createAtCCDV: new FormControl(data.createAtCCDV),
          price: new FormControl(data.price),
          email: new FormControl(data.email),
          phoneNumber: new FormControl(data.phoneNumber)
        })
    });

  }

}
