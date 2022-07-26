import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateStudentComponent } from './create-student/create-student.component';
// import { Routes, RouterModule } from '@angular/router';
import { ListStudentComponent } from './list-student/list-student.component';
import { StudentsComponent } from './student.component';
import { UpdateStudentComponent } from './update-student/update-student.component';
// import { UserListComponent } from './user-list/user-list.component';
// // import { UserDetailComponent } from './user-detail/user-detail.component';
// import { UsersEditComponent } from './user-edit/user-edit.component';
// import { UsersComponent } from './users.component';


const routes: Routes = [
  {
    path: '',
    component: StudentsComponent,
    children: [
        {path: '', component: ListStudentComponent},
        {path: 'update-student/:id', component: UpdateStudentComponent},
        {path: 'create-student', component: CreateStudentComponent},
        // {path: 'new', component: UsersEditComponent, canDeactivate: [PendingChangesGuard]},
        // {path: 'edit', component: UsersEditComponent, canDeactivate: [PendingChangesGuard]},
        // {path: ':id/detail', component: UserDetailComponent, canDeactivate: [PendingChangesGuard] }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class StudentsRoutingModule {}