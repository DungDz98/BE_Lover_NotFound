import { Component, OnInit } from '@angular/core';
import {FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';


import {IUserService} from "../../../../../models/userService/iuserService"
import {UserServiceService} from "../../../../../service/user-service/user-service.service";


import {CategoryService} from "../../../../../service/category/category.service";

import {UserService} from "../../../../../service/user/user.service";
import {Router} from "@angular/router";
import {Category} from "../../../../../model/category/category";

@Component({
  selector: 'app-check-ccdv',
  templateUrl: './check-ccdv.component.html',
  styleUrls: ['./check-ccdv.component.css']
})
export class CheckCcdvComponent implements OnInit {
  idUs: number = 0;
  listServiceShow: Category[] = [];
  listServiceSelect: Category[] = [];
  // @ts-ignore
  service: FormGroup;
  serviceFormGroup: FormGroup;
// @ts-ignore
  // @ts-ignore
  jwt: JwtResponse = JSON.parse(localStorage.getItem('jwtResponse'));
  // @ts-ignore
  user: User = {};
  constructor(private categoryService: CategoryService,
              private formBuilder: FormBuilder,
              private userService: UserServiceService,
              private userSr : UserService,
              private router :Router
  ) {
    this.serviceFormGroup = this.formBuilder.group({
      services: this.formBuilder.array([], [Validators.required]),
    })
  }

  ngOnInit(): void {
    this.getAll();
    this.getByIdUs();
  }

  getAll() {
    this.categoryService.getAll().subscribe(data => {
      this.listServiceShow = data;
    })
  }

  onCheckboxChange(e: any) {
    const service: FormArray = this.serviceFormGroup.get('services') as FormArray;
    if (e.target.checked) {
      service.push(new FormControl(e.target.value));
    } else {
      const index = service.controls.findIndex(x => x.value === e.target.value);
      service.removeAt(index);
    }
  }
  submit() {
    console.log(this.serviceFormGroup.value.services);

  }

  getByIdUs() {
    // @ts-ignore
    this.idUs = this.jwt.id
    console.log("a" + this.idUs)
    this.userSr.getById(this.idUs).subscribe(user => {
      this.user = user;
      console.log(this.user)
    });
  }


  user_Service!: IUserService;

  getById(id: number) {

    // @ts-ignore

    this.categoryService.findById(id).subscribe(data => {
      this.user_Service = {category: data, user: this.user}
      // @ts-ignore
      console.log(this.user);
      this.userService.create(this.user_Service).subscribe(() => {

      })
      // this.listServiceSelect.push(data)
      // console.log(this.listServiceSelect)
    })
  }


  // Lấy list dịch vụ đã đăng kí
  getListService() {
    console.log(this.serviceFormGroup.value.services)
    for (let i = 0; i < this.serviceFormGroup.value.services.length; i++) {
      // @ts-ignore
      this.getById(this.serviceFormGroup.value.services[i])
    }
    alert("Chúc mừng bạn đã đăng ký thành công")
    this.router.navigate([""]);
  }
}
