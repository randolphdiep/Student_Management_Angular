// import { HttpClientModule } from '@angular/common/http';
// import { NgModule } from '@angular/core';
// import { BrowserModule } from '@angular/platform-browser';
// import { AppRoutingModule } from './app-routing.module';
// import { AppComponent } from './app.component';
// import { PublicModule } from './layout/public/public.module';

import { HttpClientModule } from "@angular/common/http";
import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { PublicModule } from "./layout/public/public.module";

// import { HttpClientModule} from '@angular/common/http';
//import { DataTablesModule } from 'angular-datatables';
// import { AppRoutingModule } from './app-routing.module';
// import { AppComponent } from './app.component';
//import { FormsModule} from '@angular/forms';
//import { DataTablesModule } from 'angular-datatables';
// import { PublicModule } from './layout/public/public.module';
// import { BrowserModule } from '@angular/platform-browser';
// import { LoginUserComponent } from './features/login-user/login-user.component';
// import { CreateStudentComponent } from './features/student/create-student/create-student.component';
// import { ListStudentComponent } from './features/student/list-student/list-student.component';
// import { UpdateStudentComponent } from './features/student/update-student/update-student.component';
// import { CreateUserComponent } from './features/user/create-user/create-user.component';


@NgModule({
  declarations: [
    AppComponent,
    // ListStudentComponent,
    // CreateUserComponent,
    // CreateStudentComponent,
    // UpdateStudentComponent,
    // LoginUserComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    //DataTablesModule,
    //FormsModule,
    HttpClientModule,
    PublicModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
