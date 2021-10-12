import {Component, OnInit} from '@angular/core';
import {User} from "../../model/User";
import {RentService} from "../../service/rent/rent.service";
import {ActivatedRoute, ParamMap, Router} from "@angular/router";
import {FormArray, FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";
import {UserService} from "../../service/user/user.service";
import {Rent} from "../../model/Rent";
import {TokenService} from "../../service/in-out/token.service";
import {UserServiceService} from "../../service/user-service/user-service.service";
import {CategoryService} from "../../service/category/category.service";
import {Category} from "../../model/category/category";

import {RentWithoutServices} from "../../model/RentWithoutServices";
import {IuserService} from "../../models/userService/iuserService";

@Component({
  selector: 'app-profile-provider',
  templateUrl: './profile-provider.component.html',
  styleUrls: ['./profile-provider.component.css']
})
export class ProfileProviderComponent implements OnInit {
  id: number = 0;
  idUs: number | undefined = 0;
  idUser1!: number | undefined;
  // @ts-ignore
  user: User = {};
  // @ts-ignore
  userCurrent: User = {};
  rent: Rent = {};
  serviceDetail: Category = {};
  categories: Category[] = [];
  subRent: RentWithoutServices = {};

  constructor(private rentService: RentService,
              private activatedRoute: ActivatedRoute,
              private router: Router,
              private formBuilder: FormBuilder,
              private userService: UserService,
              private tokenService: TokenService,
              private userServiceService: UserServiceService,
              private categoryService: CategoryService
  ) {
  }

  ngOnInit(): void {
    this.activatedRoute.paramMap.subscribe((paramMap: ParamMap) => {
      this.idUs = this.tokenService.getJwt().id;
      // @ts-ignore
      this.id = +paramMap.get('id');
      console.log(this.id);
      this.getAllRent();
      this.getUserById(this.id);
      // @ts-ignore
      this.getUserCurrent(this.idUs);
      this.getUserServiceByUserId(this.id);
      if (this.tokenService.getJwt()) {
        this.idUser1 = this.tokenService.getJwt().id;
        // @ts-ignore
      }
    });
  }

  getUserById(id: number) {
    this.userService.getUserById(id).subscribe(user => this.user = user);
  }

  getUserCurrent(id: number) {
    this.userService.getUserById(id).subscribe(userCurrent => this.userCurrent = userCurrent);
  }

  date: Date = new Date();
  date2 = '';
  date3 = '';
  date4 = '';
  date5 = '';
  hour = 0;
  total = 0;
  // @ts-ignore
  user: User = {};
  checkDate: Date = new Date();
  arr = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23];
  arr1 = [];

  rentForm: FormGroup = new FormGroup({

    startDate: new FormControl('', [Validators.required]),
    totalMoney: new FormControl(this.total),
    time: new FormControl('', [Validators.required]),
    rentDate: new FormControl('', [Validators.required]),
    // @ts-ignore
    service: new FormArray([], [Validators.required])

  });
  listUserService: IuserService[] = [];

  checkReset() {
    this.router.navigate([''])
    window.location.reload()
  }

  checkPrice() {
// @ts-ignore
    let a = document.getElementById('price').value;
    // @ts-ignore
    this.total = this.user.price * parseInt(a);
    console.log(a, 'price');
  }

  setHour() {
    for (let i = this.hour + 1; i < 24; i++) {
      // @ts-ignore
      this.arr1.push(i);
    }
  }

  rent1() {
    console.log(this.idUs, 'aa');
    if (this.idUs == 0) {
      this.router.navigate(['login']);
    }
    this.date = new Date();
    console.log(this.date.getHours());
    this.hour = this.date.getHours();

    this.date2 = this.date.getFullYear() + '-' + (this.date.getMonth() + 1) + '-' + this.date.getDate();
    this.date3 = this.date.getFullYear() + '-' + '0' + (this.date.getMonth() + 1) + '-' + '0' + this.date.getDate();
    this.date4 = this.date.getFullYear() + '-' + (this.date.getMonth() + 1) + '-' + '0' + this.date.getDate();
    this.date5 = this.date.getFullYear() + '-' + '0' + (this.date.getMonth() + 1) + '-' + this.date.getDate();

    console.log(this.date5);
    this.setHour();
  }

  change() {
    // @ts-ignore
    this.checkDate = new Date(document.getElementById('a').value);
    console.log(this.checkDate.getDate());
  }

  change1() {
    // @ts-ignore
    this.checkDate = new Date(document.getElementById('b').value);
    console.log(this.checkDate.getDate());
  }

  change2() {
    // @ts-ignore
    this.checkDate = new Date(document.getElementById('c').value);
    console.log(this.checkDate.getDate());
  }

  change3() {
    // @ts-ignore
    this.checkDate = new Date(document.getElementById('d').value);
    console.log(this.checkDate.getDate());
  }

  listService: Category[] = [];
  rentUpdate: Rent = {};
  listIdService: String[] = [];

  saveRent() {
    console.log(this.rentForm.value.service);
    let a = '';
    if (parseInt(this.rentForm.value.startDate) < 10) {
      a = this.rentForm.value.rentDate + ' 0' + this.rentForm.value.startDate + ':00:00';
    }
    a = this.rentForm.value.rentDate + ' ' + this.rentForm.value.startDate + ':00:00';

    for (let i = 0; i < this.categories.length; i++) {
      console.log(i);
      // @ts-ignore
      this.listIdService.push(this.categories[i].id);
      // @ts-ignore
      this.categoryService.findById(this.categories[i].id).subscribe(data1 => {
        console.log("----" + this.serviceDetail);
        console.log("----" + data1);
        this.listService.push(data1);
        console.log(this.listService);
      });
    };

    this.rent = {
      user: this.user,
      userRent: this.userCurrent,
      rentDate: this.rentForm.value.rentDate,
      startTime: new Date(a),
      time: this.rentForm.value.time,
      totalMoney: this.total,
      services: this.listService
    };



    this.subRent = {
      user: this.user,
      userRent: this.userCurrent,
      rentDate: this.rentForm.value.rentDate,
      startTime: new Date(a),
      time: this.rentForm.value.time,
      totalMoney: this.total,
      services: this.listIdService
    };

    console.log(this.subRent);
    this.rentService.saveSubRent(this.subRent).subscribe(rentResp => {
      alert("Thuê thành công");
      console.log("+++++" + rentResp.services);
      this.getAllRent();
    });


    // this.rentService.saveRent(this.rent).subscribe(data => {
    //   for (let i = 0; i < this.categories.length; i++) {
    //     console.log(i);
    //     // @ts-ignore
    //     this.categoryService.findById(this.categories[i].id).subscribe(data1 => {
    //       console.log("----" + this.serviceDetail);
    //       console.log("----" + data1);
    //       this.listService.push(data1);
    //       console.log(this.rent);
    //
    //     });
    //   }
    //   this.rent = data;
    //   this.rent.services = this.listService;
    //   // @ts-ignore
    //   this.rentService.changeStatus(this.rent.id, 0).subscribe(() => {
    //     console.log('okkkkk');
    //   });
    // });
  }

  getUserServiceByUserId(id: number) {
    this.userServiceService.findByUserId(id).subscribe(list => {
      // @ts-ignore
      this.listUserService = list;
      console.log(this.listUserService);
    });
  }

  getByIdCategoryService(id: number) {
    this.categoryService.findById(id).subscribe(data => {
      this.serviceDetail = data;
      console.log(this.serviceDetail);
    });
  }

  onCheckboxChange(e: any) {
    const service: FormArray = this.rentForm.get('service') as FormArray;
    console.log(service);
    if (e.target.checked) {

      service.push(new FormControl(e.target.value));

      this.userServiceService.findOne(parseInt(new FormControl(e.target.value).value)).subscribe(data => {
        console.log('data', data);
        // @ts-ignore
        this.total += data.price;

        // @ts-ignore
        this.categories.push(data.category);
      });
      this.rentForm.value.totalMoney = this.total;
    } else {
      const index = service.controls.findIndex(x => x.value === e.target.value);
      service.removeAt(index);

      this.userServiceService.findOne(parseInt(new FormControl(e.target.value).value)).subscribe(data => {
        // @ts-ignore
        this.total -= data.price;
        // @ts-ignore
        this.categories.splice(index, 1);
      });
      this.rentForm.value.totalMoney = this.total;
    }


    console.log(this.total, '1');
  }

  countRents: number = 0;

  getAllRent() {
    this.rentService.getAllRentForProvider(this.id).subscribe(rents => {
      if (rents != null) this.countRents = rents.length;
    });
  }
}
