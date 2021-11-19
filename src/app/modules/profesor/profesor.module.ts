import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PrincipalpComponent } from './components/principalp/principalp.component';
import { RouterModule } from '@angular/router';
import { AuthModule } from '../auth/auth.module';



@NgModule({
  declarations: [
    PrincipalpComponent
  ],
  imports: [
    AuthModule,
    CommonModule,
    RouterModule
  ]
})
export class ProfesorModule { }
