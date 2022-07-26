import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { StudentsRoutingModule } from './student-routing.module';
import { StudentsComponent } from './student.component';
import { ListStudentComponent } from './list-student/list-student.component';
import { DataTablesModule } from 'angular-datatables';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { UpdateStudentComponent } from './update-student/update-student.component';
import { CreateStudentComponent } from './create-student/create-student.component';
import { MenubarComponent } from 'src/app/shared/menubar/menubar.component';

@NgModule({
  declarations: [
    StudentsComponent,
    ListStudentComponent,
    UpdateStudentComponent,
    CreateStudentComponent
    // UserListComponent,
    // UsersEditComponent,
    // AssignRoleComponent,
    // CancelAddComponent,
    // DeleteUserComponent,
    // UserDetailComponent,
    // AssignClientComponent
  ],
  imports: [
    RouterModule,
    ReactiveFormsModule,
    CommonModule,
    StudentsRoutingModule,
    FormsModule,
    DataTablesModule
  //  MatFormFieldModule,
   // MatSelectModule
  ]
})
export class StudentsModule { }
