import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { PrincipalComponent } from './components/principal/principal.component';
import { AuthModule } from '../auth/auth.module';


@NgModule({

  declarations: [
    PrincipalComponent
  ],
  imports: [
    AuthModule,
    CommonModule,
    RouterModule
  ]
})

export class AlumnoModule { }
