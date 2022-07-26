import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CreateStudentComponent } from 'src/app/features/student/create-student/create-student.component';
import { UpdateStudentComponent } from 'src/app/features/student/update-student/update-student.component';
// import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from 'src/app/service/auth.guard';
import { SecureComponent } from './secure.component';

const routes: Routes = [
  {
    path: '',
    component: SecureComponent,
    canActivate: [AuthGuard],
    children: [
      {
        path: 'students',
        loadChildren: () =>
          import('../../features/student/student.module').then(
            (m) => m.StudentsModule
          )
      },
      // {
      //   path: 'update-student/:id',
      //   loadChildren: () =>
      //     import('../../features/student/student.module').then(
      //       (m) => m.StudentsModule
      //     ),
      // }
      { path: 'update-student/:id', component: UpdateStudentComponent},
      { path: 'create-student', component: CreateStudentComponent}
    ],
    
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SecureRoutingModule { }
