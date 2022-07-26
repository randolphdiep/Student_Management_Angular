import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
// import { CreateStudentComponent } from './features/student/create-student/create-student.component';
// import { CreateUserComponent } from './features/user/create-user/create-user.component';
// import { ListStudentComponent } from './list-student/list-student.component';
// import { LoginUserComponent } from './features/login-user/login-user.component';
// import { UpdateStudentComponent } from './update-student/update-student.component';

const routes: Routes = [
  // {path: '', redirectTo: 'show-list-student', pathMatch: 'full'},
  // {path: 'show-list-student', component: ListStudentComponent},
  // {path: 'create-user', component: CreateUserComponent},
  // {path: 'create-student', component: CreateStudentComponent},
  // {path: 'update-student/:id', component: UpdateStudentComponent},
  // {path: 'login', component: LoginUserComponent}

  //Fixed route
  {path: '', redirectTo: '/login', pathMatch:'full'},
  {
    path: '',
    loadChildren: () =>
      import("./layout/public/public.module").then(m => m.PublicModule)
  },
  {
    path: '',
    loadChildren: () =>
      import("./layout/secure/secure.module").then(
        m => m.SecureModule
      )
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
