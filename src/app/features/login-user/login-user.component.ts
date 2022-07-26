import { Component, OnInit } from '@angular/core';
// import { Router } from '@angular/router';
import { UserService } from 'src/app/service/user.service';
// import { FormControl, FormGroup, Validators } from '@angular/forms'
import { AuthService } from 'src/app/service/auth.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { data } from 'jquery';

@Component({
  selector: 'app-create-user',
  templateUrl: './login-user.component.html',
  styleUrls: ['./login-user.component.css']
})
export class LoginUserComponent implements OnInit {

  loginForm: any;
  error: any = null;
  checkLogin: boolean = true //true is Login, false is register

  constructor(
    private userService: UserService,
    private authService: AuthService,
    private router: Router) { }

  ngOnInit(): void {
    this.loginForm = new FormGroup({
      username: new FormControl(null, [
        Validators.required,
        Validators.maxLength(20),
        Validators.pattern('[a-zA-Z0-9!@#$&()\\-`.+,/]*')
      ]),
      password: new FormControl(null, [
        Validators.required,
        Validators.maxLength(15),
        Validators.minLength(6),
        Validators.pattern('[a-zA-Z0-9!@#$&()\\-`.+,/]*')
      ]),
    });

  }

  // onSubmit(){
  //   console.log(this.loginForm.value);
  //   this.error = null;
  //   if(this.loginForm.valid){
  //     let tmpusername = this.loginForm.value.username
  //     let tmppw = this.loginForm.value.password
  //     this.authService.login(tmpusername, tmppw)
  //   }else{
  //     this.error = "Invalid input! Please try again"
  //   }

  // }

  onSubmit() {
    this.error = null;
    if (this.loginForm.valid) {
      let tmpusername = this.loginForm.value.username
      let tmppw = this.loginForm.value.password
      this.userService.findUser(tmpusername).subscribe(data => {
        this.authService.login(tmpusername, tmppw).subscribe(responseData => {
          const userToken = {
            access_token: responseData['token'],
            refresh_token: '34567890'
          }
          localStorage.setItem("accessToken", JSON.stringify(userToken))
          localStorage.setItem("username", JSON.stringify(tmpusername))
          window.open('/students', '_self')
        },
          error => {
            console.log(error)
            switch (error.status) {
              case 401:
                this.error = 'Wrong password!'
                break
            }
          }
        );

      }, error => {
        {
          switch (error.status) {
            case 500:
              this.error = 'Username not exist'
              break
          }
        }
      });
    } else {
      this.error = "Invalid input!"
    }

  }

}
