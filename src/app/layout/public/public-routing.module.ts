import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
// import { Routes, RouterModule } from '@angular/router';
import { LoginUserComponent } from 'src/app/features/login-user/login-user.component';
import { RegisterUserComponent } from 'src/app/features/register-user/register-user.component';
import { PublicComponent } from './public.component';

const routes: Routes = [
  {
    path: '',
    component: PublicComponent,
    children: [
        {path: 'login', component:LoginUserComponent},
        {path: 'register', component: RegisterUserComponent},
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PublicRoutingModule {}