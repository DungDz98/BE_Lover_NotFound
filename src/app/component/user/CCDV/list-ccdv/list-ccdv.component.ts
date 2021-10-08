import {Component, OnInit} from '@angular/core';
import {SelectService} from "../../../../sevice/select/select.service";
import {User} from "../../../../models/user/user";
import {City} from "../../../../models/city";
import {HttpClient} from "@angular/common/http";
import {FormControl, FormGroup} from "@angular/forms";
import {UserTest} from "../../../../models/selectInHome/user-test";

@Component({
  selector: 'app-list-ccdv',
  templateUrl: './list-ccdv.component.html',
  styleUrls: ['./list-ccdv.component.css']
})
export class ListCcdvComponent implements OnInit {

  listUserCCDV: User[] = [];
  listUserCCDVHaveCategory: UserTest[] = [];
  city: City[] = []
  page = 1;
  page2 = 1;
  size!: number;
  size1!: number;
  size2!: number;
  status!: String;
  userForm!: FormGroup;

  constructor(private select: SelectService, private http: HttpClient) {
  }

  ngOnInit(): void {
    this.status = 'false';
    this.getUserCategory()
    this.getListCity();
    this.userForm = new FormGroup({
      name: new FormControl(),
      gender: new FormControl('Giới tính'),
      city: new FormControl('Thành Phố'),
    })
  }

  // test feature

  resetValue(){
    this.userForm.get('name')?.setValue('');
    this.userForm.get('gender')?.setValue('Giới tính');
    this.userForm.get('city')?.setValue('Thành Phố');
  }

  //------

  // select ra homepage
  getAll() {
    this.select.getAllSelectRequest().subscribe((data) => {
      this.listUserCCDV = data;
      this.size = data.length
      this.page = 1;
      this.status = 'true';
    })
  }

  getUserCategory(){
    this.select.findUserHaveCategory().subscribe((data)=>{
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
      this.page = 1
      })
  }

  getAllByName() {
    this.select.findByName(this.userForm.get('name')?.value).subscribe((data) => {
        this.listUserCCDV = data;
        this.size = data.length;
        this.page = 1;
        this.status = 'true';
        if (data.length == 0){
          this.status = 'falseName';
        }
      },
      error => {
        this.getAll()
      })
  }

  getByGender() {
    this.select.findUserByGender(this.userForm.get('gender')?.value).subscribe((data) => {
        this.listUserCCDV = data;
        this.size = data.length;
        this.page = 1;
        this.status = 'true';
      if (data.length == 0){
        this.status = 'falseGender';
      }
      })
  }

}
