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
import {Stomp} from "@stomp/stompjs";
import {Select} from "../../../../model/select/select";

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
  listFindFiled: UserTest[] = [];
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
  selectTest!: Select;

  // socket
  title = 'grokonez';
  message: string = "";
  greetings: string[] = [];
  disabled = true;
  private stompClient: any;
  idUserS!: number;
  username!: String;
  userS!: User
  avatar!: string;

  messForm!: FormGroup;

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

    // @ts-ignore
    this.idUserS = this.token.getJwt().id;
    this.getTest(this.idUserS)
    //form controller
    this.messForm = new FormGroup({
      messing: new FormControl(''),
      id: new FormControl(this.getTest(this.idUserS)),
      username: new FormControl('')
    })

    this.connect();
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

  getAllGoiY() {
    this.http.get<User>(`http://localhost:8080/ccdv/${this.token.getJwt().id}`).subscribe((data) => {
      this.select.getAllGoiY(data.gender).subscribe((data1) => {
        this.listGoiY = data1
      })
    })
  }

  findAllVipUser() {
    this.select.findAllVipUser().subscribe((data) => {
      this.listVipUser = data
    })
  }

  // socket
  setConnected(connected: boolean) {
    this.disabled = !connected;

    if (connected) {
      this.greetings = [];
    }
  }

  connect() {
    // đường dẫn đến server
    const socket = new WebSocket('ws://localhost:8080/gkz-stomp-endpoint/websocket');
    this.stompClient = Stomp.over(socket);
    const _this = this;
    this.stompClient.connect({}, function (frame: any) {
      _this.setConnected(true);
      console.log('Connected: ' + frame);

      // là chờ xèm thằng server gửi về.
      _this.stompClient.subscribe('/topic/public', function (hello: any) {
        _this.showGreeting(JSON.parse(hello.body).greeting);
      });

    });
  }

  disconnect() {
    if (this.stompClient != null) {
      this.stompClient.disconnect();
    }
    this.setConnected(false);
    console.log('Disconnected!');
  }

  sendName() {
    this.messForm.get('id')?.setValue(this.userS.id);
    // @ts-ignore

    this.avatar = this.userS.avatar;
    this.stompClient.send(
      '/gkz/hello',
      {},
      // Dữ liệu được gửi đi
      JSON.stringify({'name': this.userS.userName, 'message': this.messForm.get('messing')?.value})
    );
    this.messForm.get("messing")?.setValue("");
  }

  showGreeting(message: any) {
    this.greetings.push(message);
  }

  getTest(id: number) {
    this.userService.getUserTest(id).subscribe((data) => {
      this.userS = data;
      console.log(data.userName)
    })
  }

  getAllByField() {

    if (this.userForm.get("city1")?.value == "Thành Phố") {
      this.userForm.get("city1")?.setValue("");
    }
    if (this.userForm.get("gender")?.value == "Giới tính") {
      this.userForm.get("gender")?.setValue("");
    }
    if (this.userForm.get("name")?.value == null) {
      this.userForm.get("name")?.setValue("");
    }
    this.selectTest = this.userForm.value;
    console.log(this.userForm.value)
    this.select.findAllByField(this.selectTest).subscribe((data) => {
        this.listUserCCDV = data;
        this.size = data.length;
        this.page = 1;
        this.status = 'true';
        if (data.length == 0) {
          this.status = 'false';
        }
      },
      error => {
        this.getAll()
      })
  }

}


