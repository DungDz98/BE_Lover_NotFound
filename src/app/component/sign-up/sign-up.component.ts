import { Component, OnInit } from '@angular/core';
import {SignUpForm} from '../../model/in-out/sign-up-form';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {AuthService} from '../../service/in-out/auth.service';
import {Router, RouterModule} from "@angular/router";

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {
  signUpForm: SignUpForm = {};

  status = 'Vui lòng điền vào biểu mẫu để đăng ký!';
  error1 = {
    message: 'This username is existed'
  };
  error2 = {
    message: 'This email is existed'
  };

  success = {
    message: 'Register successfully'
  };
  registerForm: FormGroup = new FormGroup({
    userName: new FormControl('', [Validators.required, Validators.pattern(/^[a-z]{1}[a-z0-9._-]{3,15}$/)]),
    email: new FormControl('', [Validators.required, Validators.email]),
    phoneNumber: new FormControl('', [Validators.required, Validators.pattern(/^0\d{9}$/)]),
    password: new FormControl('', [Validators.required,
      Validators.pattern(new RegExp('^(?=.*[A-Za-z])(?=.*\\d)(?=.*[@$!%*#?&])[A-Za-z\\d@$!%*#?&]{8,20}$'))]),
    confirmedPassword: new FormControl('', [Validators.required])
    // 123456!a
  });
  isPassword = 'password';
  isConfirmedPassword = 'password';
  isRegistered = false;

  get username(): any {
    return this.registerForm.get('userName');
  }

  get email(): any {
    return this.registerForm.get('email');
  }get phoneNumber(): any {
    return this.registerForm.get('phoneNumber');
  }

  get password(): any {
    return this.registerForm.get('password');
  }

  get confirmedPassword(): any {
    return this.registerForm.get('confirmedPassword');
  }
  constructor(private authService: AuthService,
              private router: Router) { }

  ngOnInit(): void {
  }
  register(): void {
    this.signUpForm = new SignUpForm( this.username.value, this.password.value, this.email.value, this.phoneNumber.value);
    console.log(this.signUpForm);
    this.authService.register(this.signUpForm).subscribe(data => {
      if (JSON.stringify(data) === JSON.stringify(this.error1)) {
        this.status = 'Tên người dùng đã tồn tại! Vui lòng thử lại!';
      }
      if (JSON.stringify(data) === JSON.stringify(this.error2)) {
        this.status = 'Email đã tồn tại! Vui lòng thử lại!';
      }
      if (JSON.stringify(data) === JSON.stringify(this.success)) {
        this.isRegistered = true;
        this.status = 'Bạn đã đăng ký thành công, bạn có thể đăng nhập ngay bây giờ';
        this.router.navigate(["/login"]);
      }
    });
  }
  showPass(): void {
    this.isPassword = (this.isPassword === 'password') ? 'text' : 'password';
  }

  showConfirmedPass(): void {
    this.isConfirmedPassword = (this.isConfirmedPassword === 'password') ? 'text' : 'password';
  }

}
