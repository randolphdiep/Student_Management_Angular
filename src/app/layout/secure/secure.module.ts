import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
// import { ReactiveFormsModule } from '@angular/forms';
import { SecureRoutingModule } from './secure-routing.module';
import { CommonModule } from '@angular/common';
import { SecureComponent } from './secure.component';
import { MenubarComponent } from 'src/app/shared/menubar/menubar.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    SecureComponent,
    MenubarComponent
  ],
  exports: [
    // GeoChartComponent,
    // TopFiveComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    ReactiveFormsModule,
    SecureRoutingModule,
  ]
})
export class SecureModule {}
