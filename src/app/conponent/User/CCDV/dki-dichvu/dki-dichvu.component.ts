// import {Component, OnInit} from '@angular/core';
// import {FormArray, FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
// import {Category} from 'src/app/models/category/category';
// import {CategoryService} from 'src/app/service/category/category.service';
// import {UserServiceService} from 'src/app/service/user-service/user-service.service';
// import {UserService} from 'src/app/service/user/user.service';
//
// @Component({
//   selector: 'app-dki-dichvu',
//   templateUrl: './dki-dichvu.component.html',
//   styleUrls: ['./dki-dichvu.component.css']
// })
// export class DkiDichvuComponent implements OnInit {
//   listServiceShow: Category[] = [];
//   listServiceSelect: Category[] = [];
//
//   service?: FormGroup;
//   serviceFormGroup?: FormGroup;
//
//   // @ts-ignore
//   jwt: JwtResponse = JSON.parse(localStorage.getItem('jwtResponse'));
//   // @ts-ignore
//   user: User = {};
//
//   constructor(
//     private category: CategoryService,
//     private formBuilder: FormBuilder,
//     private userService: UserServiceService,
//     private us: UserService
//   ) {
//     this.serviceFormGroup = this.formBuilder.group({
//       services : this.formBuilder.array([], [Validators.required]),
//     })
//   }
//   ngOnInit(): void {
//     this.getAll();
//     this.getByIdUs();
//   }
//   getAll() {
//     this.category.getAll().subscribe(data => {
//       this.listServiceShow = data;
//     })
//   }
//   onCheckboxChange(e: any) {
//     const service: FormArray = this.serviceFormGroup.get('services') as FormArray;
//     if (e.target.checked) {
//       service.push(new FormControl(e.target.value));
//     } else {
//       const index = service.controls.findIndex(x => x.value === e.target.value);
//       service.removeAt(index);
//     }
//   }
//   submit() {
//     console.log(this.serviceFormGroup.value.services);
//   }
//   getByIdUs() {
//     // @ts-ignore
//     this.idUs = this.jwt.id;
//     console.log("a" + this.getByIdUs());
//     // @ts-ignore
//     this.us.getById(this.idUs).subscribe(user => {
//       this.user = user;
//
//       console.log(this.user)
//     });
//   }
//
//   // @ts-ignore
//   user_Service: IuserService;
//
//   getById(id: number) {
//
//     // @ts-ignore
//
//     this.categoryService.getById(id).subscribe(data => {
//       this.user_Service = {service: data, user: this.user}
//       // @ts-ignore
//       console.log(this.user);
//       this.userService.create(this.user_Service).subscribe(() => {
//
//       })
//       // this.listServiceSelect.push(data)
//       // console.log(this.listServiceSelect)
//     })
//   }
//
//   getListService() {
//     console.log(this.serviceFormGroup.value.services)
//     for (let i = 0; i < this.serviceFormGroup.value.services.length; i++) {
//       // @ts-ignore
//       this.getById(this.serviceFormGroup.value.services[i])
//     }
//   }
// }
