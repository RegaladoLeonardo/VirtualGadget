import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { AuthModule } from '../auth/auth.module';
import { SinginComponent } from '../auth/components/singin/singin.component';
import { PrincipalaComponent } from './components/principala/principala.component';

const inicioaRoutes: Routes = [
  { path: 'inicioA', component: PrincipalaComponent, pathMatch: 'full' }
];

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forChild(inicioaRoutes)
  ],
  exports: [
    RouterModule
  ]
})
export class InicioaRoutingModule { }
