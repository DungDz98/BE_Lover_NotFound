import { HttpClient } from '@angular/common/http';
import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import { ActivatedRoute, Router } from '@angular/router';
import { User } from 'src/app/models/user/user';

import {AngularFireStorage} from "@angular/fire/storage";
import {UserService} from "../../../../service/user/user.service";
import {SelectService} from "../../../../service/select/select.service";
import {City} from "../../../../models/city";


@Component({
  selector: 'app-detail-ccdv',
  templateUrl: './detail-ccdv.component.html',
  styleUrls: ['./detail-ccdv.component.css']
})
export class DetailCcdvComponent implements OnInit {

  city: City[] = [];
  ccdvForm : FormGroup = new FormGroup(
    {
      name: new FormControl('',[Validators.required]),
      dateOfBirth: new FormControl(),
      gender: new FormControl('',Validators.required),
      city: new FormControl('',Validators.required),
      nationality: new FormControl('',Validators.required),
      avatar: new FormControl(),
      height: new FormControl('',Validators.min(100)),
      weight: new FormControl('',Validators.min(30)),
      hobby: new FormControl('',Validators.min(10)),
      description: new FormControl('',Validators.minLength(10)),
      requestToPayer: new FormControl(),
      linkFb: new FormControl(),
      statusCCDV: new FormControl(),
      createAtCCDV: new FormControl(),
      price: new FormControl('',[Validators.min(70),Validators.max(500)]),
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
      // this.showEditUser(this.id);
    })
  }
  saveUser(id: number) {
    this.userService.saveUser(id,this.ccdvForm.value).subscribe((data) => {
      alert("Bạn đã trở thành người cung cấp dịch vụ")
      this.router.navigate(["/serviceccdv"]);
    })
  }
  showEditUser(id: number) {
    this.http.get<User>(`http://localhost:8080/ccdv/${id}`).subscribe((data) => {
      this.ccdvForm = new FormGroup(
        {
          id: new FormControl(data.id),
          name: new FormControl(data.name,[Validators.required]),
          dateOfBirth: new FormControl(data.dateOfBirth),
          gender: new FormControl(data.gender,Validators.required),
          city: new FormControl(data.city,Validators.required),
          nationality: new FormControl(data.nationality,Validators.required),
          avatar: new FormControl(data.avatar),
          height: new FormControl(data.height,Validators.min(100)),
          weight: new FormControl(data.weight,Validators.min(30)),
          hobby: new FormControl(data.hobby,Validators.min(10)),
          description: new FormControl(data.description,Validators.minLength(10)),
          requestToPayer: new FormControl(data.requestToPayer),
          linkFb: new FormControl(data.linkFb),
          createAtCCDV: new FormControl(data.createAtCCDV),
          price: new FormControl(data.price,[Validators.min(70),Validators.max(500)]),
        })
    });

  }
  getListCity() {
    this.select.findCity().subscribe((data) => {
      this.city = data;
    })
  }
  // selectedFile : File = null;
  // fb: any;
  // downloadURL!: Observable<string>;
  //
  // onFileSelected(event:any) {
  //   var n = Date.now();
  //   const file = event.target.files[0];
  //   const filePath = `RoomsImages/${n}`;
  //   const fileRef = this.storage.ref(filePath);
  //   const task = this.storage.upload(`RoomsImages/${n}`, file);
  //   task
  //     .snapshotChanges()
  //     .pipe(
  //       finalize(() => {
  //         this.downloadURL = fileRef.getDownloadURL();
  //         this.downloadURL.subscribe(url => {
  //           if (url) {
  //             this.fb = url;
  //           }
  //           console.log(this.fb);
  //         });
  //       })
  //     )
  //     .subscribe(url => {
  //       if (url) {
  //         console.log(url);
  //       }
  //     });
  // }
}
// <!--name?: string;-->
// <!--dateOfBirth: Date;-->
// <!--gender?: string;-->
// <!--city?: string;-->
// <!--nationality?: string;-->
// <!--avatar?: string;-->
// <!--height?: string;-->
// <!--weight?: string;-->
// <!--hobby?: string;-->
// <!--description?: string;-->
// <!--requestToPayer?: string;-->
// <!--linkFb?: string;-->
// <!--createAt: Date;-->
// <!--createAtCCDV: Date;-->
// <!--statusCCDV?: number;-->
// <!--statusUs?: number;-->
// <!--price?: number;-->

