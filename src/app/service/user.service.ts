import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from '../model/user';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private baseURL = "http://localhost:8080/user";
  constructor(private httpClient : HttpClient) { }

  createUser(user : User): Observable<Object>{
    return this.httpClient.post(`${this.baseURL}/add`, user); 
  }

  findUser(username : string): Observable<Object>{
    return this.httpClient.get(`${this.baseURL}/find?username=${username}`); 
  }
}

