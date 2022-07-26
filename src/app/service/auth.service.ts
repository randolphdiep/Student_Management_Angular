import { Injectable } from '@angular/core';
// import { NavigationEnd, NavigationError, NavigationStart, Router } from '@angular/router';
import { BehaviorSubject, filter, Observable, Subscription } from 'rxjs';
import { UserInfo } from '../model/user';
import { UserToken } from '../model/userToken';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Router } from '@angular/router';

// import jwt_decode from 'jwt-decode';

@Injectable({ providedIn: 'root' })
export class AuthService {
  user = new BehaviorSubject<UserToken>(null);
  logoutMess = null;

  username: string = '';

  isAdmin: boolean = false;

  dataDecode: any;

  isLogout: boolean = false

  userInfo = new BehaviorSubject<UserInfo>(null)

  constructor(
    private router: Router,
    private http: HttpClient
  ) // private messageService: MessageService,
  // private sseService: SseService,
  { }

  // login(username: string, password: string){
  //   let tmpusername = {
  //     username: username,
  //     password: password
  //   }
  //   // 
  //   return this.http
  //     .post(
  //       environment.url + 'login',
  //       tmpusername
  //     )
  //     .subscribe(responseData => {
  //       const userToken = {
  //         // access_token: responseData['accessToken'],
  //         access_token: responseData['token'],
  //         refresh_token: '34567890'
  //       }
  //       localStorage.setItem("accessToken", JSON.stringify(userToken))
  //       localStorage.setItem("username", JSON.stringify(tmpusername.username))
  //       window.open('/students', '_self')
  //     });
  // }

    login(username: string, password: string): Observable<any>{
    let tmpusername = {
      username: username,
      password: password
    }
    return this.http.post(environment.url + 'login',tmpusername)
  }

  autoLogin() {
    this.isLogout = false
    const userToken: {
      access_token: string;
      refresh_token: string;
    } = JSON.parse(localStorage.getItem('accessToken'));

    if (!userToken) {

      return;
    }
    const loadedToken = new UserToken(
      userToken.access_token,
      userToken.refresh_token
    );

    this.handleAuthentication(userToken.access_token, userToken.refresh_token)
  }

  logout(isAutoLogout: boolean) {
    this.isLogout = true
    this.user.next(null);
    this.router.navigate(['/login']);
    localStorage.removeItem('accessToken');
    localStorage.removeItem('username');
    // if (this.tokenExpirationTimer) {
    //   clearTimeout(this.tokenExpirationTimer);
    // }
    // this.tokenExpirationTimer = null;
    // if (!isAutoLogout) {
    //   this.logoutMess = 'You have signed out of your account';
    // } else {
    //   this.logoutMess =
    //     'Sorry, your session timed out due to inactivity. Please log-in again';
    // }
  }

  //   autoLogout(expirationDuration: number) {
  //     this.tokenExpirationTimer = setTimeout(() => {
  //       this.logout(true);
  //     }, expirationDuration);
  //   }

  handleAuthentication(access_token: string, refresh_token: string) {
    const user = new UserToken(access_token, refresh_token);
    // const dataDecode = jwt_decode(access_token);
    // const expireDuration = dataDecode['exp'] * 1000;
    this.user.next(user);
    // this.autoLogout(expireDuration)
    // this.getUserData(access_token)
    localStorage.setItem('accessToken', JSON.stringify(user));
    //this.messageService.setMessages('Login successfully');
  }
}
