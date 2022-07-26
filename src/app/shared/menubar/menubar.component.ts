import {
    Component,
    ElementRef,
    OnInit,
    Renderer2,
    ViewChild,
  } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/service/auth.service';
import { environment } from 'src/environments/environment';
//   import { UserService } from 'generated/user-service';
//   import jwt_decode from 'jwt-decode';
//   import { Subscription } from 'rxjs';
//   import { AuthService } from 'src/app/service/auth.service';
//   import { environment } from 'src/environments/environment';
  
  @Component({
    selector: 'app-menubar',
    templateUrl: './menubar.component.html',
    styleUrls: ['./menubar.component.css'],
  })
  export class MenubarComponent implements OnInit {
    // private baseURL = environment.url + 'list';
    currentLink: string = "";
    token : any;
    constructor(
      private authService: AuthService,
      private router: Router){}
    ngOnInit(): void {
      this.token = JSON.parse(localStorage.getItem('username'))
      //   this.currentLink = this.router.url;
      //   console.log(this.router.url);

    }
    
    onLogOut(){
      this.authService.logout(false);
      this.router.navigate(['/login']);
    }
  }
