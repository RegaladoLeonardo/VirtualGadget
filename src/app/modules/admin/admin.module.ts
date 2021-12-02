import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PrincipalaComponent } from './components/principala/principala.component';
import { RouterModule } from '@angular/router';
import { ComponentsModule } from '../../shared/components/components.module';
import { AlumnosaComponent } from './components/alumnosa/alumnosa.component';
import { ProfesaComponent } from './components/profesa/profesa.component';



@NgModule({
  declarations: [
    PrincipalaComponent,
    AlumnosaComponent,
    ProfesaComponent,
  ],
  imports: [
    CommonModule,
    RouterModule,
    ComponentsModule
  ]
})
export class AdminModule { }
