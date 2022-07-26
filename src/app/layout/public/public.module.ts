import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import { PublicRoutingModule } from './public-routing.module';
import { PublicComponent } from './public.component';
import { CommonModule } from '@angular/common';
import { LoginUserComponent } from 'src/app/features/login-user/login-user.component';
import { RegisterUserComponent } from 'src/app/features/register-user/register-user.component';


@NgModule({
  declarations: [
    LoginUserComponent,
    RegisterUserComponent,
    PublicComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    ReactiveFormsModule,
    PublicRoutingModule,
  ]
})
export class PublicModule {}