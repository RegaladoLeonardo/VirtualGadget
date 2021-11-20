import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PrincipalaComponent } from './components/principala/principala.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [
    PrincipalaComponent,
    NavbarComponent
  ],
  imports: [
    CommonModule,
    RouterModule
  ]
})
export class AdminModule { }
