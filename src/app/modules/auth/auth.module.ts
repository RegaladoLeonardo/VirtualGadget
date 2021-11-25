import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SinginComponent } from './components/singin/singin.component';
import { SingupComponent } from './components/singup/singup.component';
import { PoliticasComponent } from './components/politicas/politicas.component';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import { ComponentsModule } from '../../shared/components/components.module';


@NgModule({
  exports:[

    SinginComponent
  ],
  declarations: [
    SinginComponent,
    SingupComponent,
    PoliticasComponent
  ],
  imports: [
    RouterModule,
    CommonModule,
    ReactiveFormsModule,
    ComponentsModule
  ]
})
export class AuthModule { }
