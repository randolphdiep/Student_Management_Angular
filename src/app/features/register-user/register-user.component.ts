import { Component, OnInit } from '@angular/core';
// import { Router } from '@angular/router';
import { UserService } from 'src/app/service/user.service';
// import { FormControl, FormGroup, Validators } from '@angular/forms'
import { User } from 'src/app/model/user';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create-user',
  templateUrl: './register-user.component.html',
  styleUrls: ['./register-user.component.css']
})
export class RegisterUserComponent implements OnInit {
  signupForm: any;

  checkLogin: boolean = true //true is Login, false is register

  error: any = null;

  constructor(
    private userService: UserService,
    private router: Router) { }

  ngOnInit(): void {
    this.signupForm = new FormGroup({
      username: new FormControl(null, [
        Validators.required,
        Validators.maxLength(20),
        Validators.pattern('[a-zA-Z0-9!@#$&()\\-`.+,/]*')
        // Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$'),
      ]),
      password: new FormControl(null, [
        Validators.required,
        Validators.minLength(6),
        Validators.maxLength(15),
        Validators.pattern('[a-zA-Z0-9!@#$&()\\-`.+,/]*')
      ]),
      cfpassword: new FormControl(null, [
        Validators.required,
        Validators.required,
        Validators.minLength(6),
        Validators.maxLength(15),
        Validators.pattern('[a-zA-Z0-9!@#$&()\\-`.+,/]*')
      ])
    });
  }

  // saveUser(){
  //   this.userService.createUser(this.user).subscribe(data =>{
  //     console.log(data);
  //     this.goToListStudent();
  //   },
  //   error => console.log(error));
  // }
  clickMethod() {
    if (confirm("Account created successfully!")) {
      console.log("Implement delete functionality here");
    }
  }

  goToLogin() {
    this.clickMethod();
    this.router.navigate(['/login']);
  }

  onSubmit() {
    console.log(this.signupForm.value);
    this.error = null;
    let tmpw = this.signupForm.value.password;
    let tmpcfpw = this.signupForm.value.cfpassword;
    if (tmpw !== tmpcfpw) {
      this.error = "Password not match";
    } else if (this.signupForm.valid) {
      const dataSend = {
        userName: this.signupForm.value.username,
        password: this.signupForm.value.password
      };
      this.userService.createUser(dataSend).subscribe(data => {
        console.log(data);
        this.goToLogin();
      },
        error => {
          console.log(error)
          switch (error.status) {
            case 500:
              this.error = 'Username already in used'
              break
          }
        });

    }
    else {
      this.error = "Invalid input!"
    }

  }
}

