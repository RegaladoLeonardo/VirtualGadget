import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PrincipalaComponent } from './components/principala/principala.component';
import { RouterModule } from '@angular/router';
import { ComponentsModule } from '../../shared/components/components.module';



@NgModule({
  declarations: [
    PrincipalaComponent,
  ],
  imports: [
    CommonModule,
    RouterModule,
    ComponentsModule
  ]
})
export class AdminModule { }
