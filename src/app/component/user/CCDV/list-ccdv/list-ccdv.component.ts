import {Component, OnInit} from '@angular/core';
import {SelectService} from "../../../../service/select/select.service";
import {City} from "../../../../models/city";
import {HttpClient} from "@angular/common/http";
import {FormControl, FormGroup} from "@angular/forms";
import {UserTest} from "../../../../models/selectInHome/user-test";
import {UserService} from "../../../../service/user/user.service";
import {TokenService} from "../../../../service/in-out/token.service";
import {User} from "../../../../model/user/user";
import Swal from 'sweetalert2';
import {Router} from "@angular/router";

@Component({
  selector: 'app-list-ccdv',
  templateUrl: './list-ccdv.component.html',
  styleUrls: ['./list-ccdv.component.css']
})
export class ListCcdvComponent implements OnInit {

  listUserCCDV: UserTest[] = [];
  listUserCCDVHaveCategory: UserTest[] = [];
  listGoiY: UserTest[] = [];
  listVipUser: UserTest[] = [];
  city: City[] = []
  page = 1;
  page2 = 1;
  size!: number;
  size1!: number;
  size2!: number;
  status!: String;
  userForm!: FormGroup;

  idTemp!: number | undefined;
  genderUser!: String | undefined;

  constructor(private select: SelectService, private http: HttpClient, private userService: UserService, private token: TokenService,
              private router: Router) {
  }

  ngOnInit(): void {
    this.status = 'false';
    this.getUserCategory()
    this.getListCity();
    this.userForm = new FormGroup({
      name: new FormControl(),
      gender: new FormControl('Giới tính'),
      city1: new FormControl('Thành Phố'),
    });
    this.idTemp = this.token.getJwt().id;
    this.getAllGoiY();
    // this.test()
    this.findAllVipUser();
  }

  getAll() {
    this.select.getAllSelectRequest().subscribe((data) => {
      this.listUserCCDV = data;
      this.size = data.length
      this.page = 1;
      this.status = 'true';
    })
  }

  getUserCategory() {
    this.select.findUserHaveCategory().subscribe((data) => {
      this.listUserCCDVHaveCategory = data;
      this.size2 = data.length;
      this.page = 1
    })
  }

  //-----

  getListCity() {
    this.select.findCity().subscribe((data) => {
      this.city = data;
      this.size = data.length
      console.log(this.userForm.get('city')?.value)
      this.page = 1
    })
  }

  getAllByName() {
    this.select.findByName(this.userForm.get('name')?.value).subscribe((data) => {
        this.listUserCCDV = data;
        this.size = data.length;
        this.page = 1;
        this.status = 'true';
        if (data.length == 0) {
          this.status = 'falseName';
        }
      },
      error => {
        this.getAll()
      })
  }

  getByGender() {
    this.select.findUserByGender(this.userForm.get('gender')?.value).subscribe((data) => {
      console.log(this.userForm.get('gender')?.value);
      this.listUserCCDV = data;
      this.size = data.length;
      this.page = 1;
      this.status = 'true';
      if (data.length == 0) {
        this.status = 'falseGender';
      }
    })

  }

  getByCity() {
    this.select.findUserByCity(this.userForm.get('city1')?.value).subscribe((data) => {
      console.log(this.userForm.get('city1'));
      this.listUserCCDV = data;
      this.size = data.length;
      this.page = 1;
      this.status = 'true';
    })

  }



  getAllGoiY(){
    this.http.get<User>(`http://localhost:8080/ccdv/${this.token.getJwt().id}`).subscribe((data)=>{
      this.select.getAllGoiY(data.gender).subscribe((data1)=>{
        this.listGoiY = data1
      })
    })
  }


  // test(){
  //   navigator.geolocation.getCurrentPosition(position => {
  //     console.log(position.coords.latitude)
  //     console.log(position.coords.longitude)
  //   })
  // }

  findAllVipUser(){
    this.select.findAllVipUser().subscribe((data)=>{
      this.listVipUser = data
    })
  }

  isTournamentRoute(url: string) {
    return this.router.url.includes(url);
  }
  //
  // open(){
  //   Swal.fire({
  //     icon: 'error',
  //     title: 'Oops...',
  //     text: 'Something went wrong!',
  //     footer: '<a href="">Why do I have this issue?</a>'
  //   })
  // }
}


