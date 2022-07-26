import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders, HttpParams} from '@angular/common/http';
import { Observable } from 'rxjs';
import { ListStudent } from '../model/list-student';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ListStudentService {
  private baseURL = environment.url + 'list';
  private baseURL2 = "http://localhost:8080/student";

  private token = JSON.parse(localStorage.getItem('accessToken'))

  private headers = new HttpHeaders({

    'Content-Type': 'application/json',

    'Authorization': `Bearer ${this.token.access_token}`

  });

  constructor(private httpClient : HttpClient) { 
    console.log(this.token)
  }
  
  getListStudent(): Observable<ListStudent[]>{
    return this.httpClient.get<ListStudent[]>(`${this.baseURL}/show`, { headers: this.headers });
  }

  searchListStudent(studentCode: string, studentName: string, dateOfBirth: string): Observable<ListStudent[]>{
    let queryParams = new HttpParams();
    queryParams = queryParams.set("code", studentCode || '');
    queryParams = queryParams.set("name", studentName || '');
    queryParams = queryParams.set("birthday", dateOfBirth || '');
    
    return this.httpClient.get<ListStudent[]>(`${this.baseURL}/search`,{headers: this.headers ,params:queryParams});
  }

  createStudent(student : ListStudent): Observable<ListStudent>{
    let queryParams = new HttpParams();
    queryParams = queryParams.set("code",student.studentCode || '');
    queryParams = queryParams.set("name",student.studentName || '');
    queryParams = queryParams.set("address",student.address || '');
    queryParams = queryParams.set("averageScore",student.averageScore || '');
    queryParams = queryParams.set("dateOfBirth",student.dateOfBirth || '');
    
    return this.httpClient.get<ListStudent>(`${this.baseURL2}/add`,{headers: this.headers ,params:queryParams});
  }

  getStudentById(id:number): Observable<ListStudent>{
    return this.httpClient.get<ListStudent>(`${this.baseURL}/edit/${id}`,{ headers: this.headers });
  }

  deleteStudentById(id:number): Observable<any> {
    return this.httpClient.delete<ListStudent>(`${this.baseURL}/delete/${id}`,{ headers: this.headers });
  }

  updateStudent(student : ListStudent): Observable<ListStudent>{
    return this.httpClient.put<ListStudent>(`${this.baseURL2}/updated`, student,{ headers: this.headers });
  }
}
