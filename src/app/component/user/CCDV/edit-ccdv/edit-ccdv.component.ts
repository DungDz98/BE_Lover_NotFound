import { Component, OnInit } from '@angular/core';
import {City} from "../../../../models/city";
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {ActivatedRoute, Router} from "@angular/router";
import {HttpClient} from "@angular/common/http";
import {AngularFireStorage} from "@angular/fire/storage";
import {UserService} from "../../../../service/user/user.service";
import {SelectService} from "../../../../service/select/select.service";
import {User} from "../../../../models/user/user";

@Component({
  selector: 'app-edit-ccdv',
  templateUrl: './edit-ccdv.component.html',
  styleUrls: ['./edit-ccdv.component.css']
})
export class EditCcdvComponent implements OnInit {
  city: City[] = [];
  ccdvForm : FormGroup = new FormGroup(
    {
      name: new FormControl('',[Validators.required]),
      dateOfBirth: new FormControl(),
      gender: new FormControl('',Validators.required),
      city: new FormControl(''),
      nationality: new FormControl('',Validators.required),
      avatar: new FormControl(),
      height: new FormControl('',Validators.min(100)),
      weight: new FormControl('',Validators.min(30)),
      hobby: new FormControl(),
      description: new FormControl('',Validators.minLength(10)),
      requestToPayer: new FormControl(),
      linkFb: new FormControl(),
      statusCCDV: new FormControl(),
      createAtCCDV: new FormControl(),
      price: new FormControl('',[Validators.min(70000),Validators.max(500000)]),
    })
  id!: number;

  //.
  constructor(private activeRoute: ActivatedRoute, private router: Router, private http: HttpClient,private storage: AngularFireStorage,private userService: UserService, private select: SelectService) {
  }

  ngOnInit(): void {
    this.getListCity()
    // this.activatedRoute.params.subscribe((data) => this.id = data.id);
    this.activeRoute.paramMap.subscribe(data => {
      this.id = parseInt(data.get('id')!)
      this.showEditUser(this.id);
    })
  }
  saveUser(id: number) {
    this.userService.saveUser(id,this.ccdvForm.value).subscribe((data) => {
      alert("Bạn đã chỉnh sửa trang cá nhân thành công")
      this.router.navigate([""]);
    })
  }
  showEditUser(id: number) {
    this.http.get<User>(`http://localhost:8080/ccdv/${id}`).subscribe((data) => {
      this.ccdvForm = new FormGroup(
        {
          id: new FormControl(data.id),
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
          createAtCCDV: new FormControl(data.createAtCCDV),
          price: new FormControl(data.price),
        })
    });

  }
  getListCity() {
    this.select.findCity().subscribe((data) => {
      this.city = data;
    })
  }
}
