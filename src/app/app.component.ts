import { Component } from '@angular/core';
import { Router } from '@angular/router';
// import { Router } from '@angular/router';
import { AuthService } from './service/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'student-management-client';

  constructor(
    private authService: AuthService,
    private router: Router
  ){}

  ngOnInit() {
    // const userToken = {
    //   access_token: '123456',
    //   refresh_token: '34567',
    // }
    // localStorage.setItem("accessToken", JSON.stringify(userToken))
    if(localStorage.getItem('accessToken') !== null) {
      this.router.navigate(["/students"])
    }
    this.authService.autoLogin();
  }
}
