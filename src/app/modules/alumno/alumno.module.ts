import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { PrincipalComponent } from './components/principal/principal.component';
import { AuthModule } from '../auth/auth.module';
import { TutorialComponent } from './components/tutorial/tutorial.component';


@NgModule({

  declarations: [
    PrincipalComponent,
    TutorialComponent
  ],
  imports: [
    AuthModule,
    CommonModule,
    RouterModule
  ]
})

export class AlumnoModule { }
