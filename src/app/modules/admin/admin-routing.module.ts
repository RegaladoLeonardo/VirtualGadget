import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { AuthModule } from '../auth/auth.module';
import { SinginComponent } from '../auth/components/singin/singin.component';
import { PrincipalaComponent } from './components/principala/principala.component';
import { AlumnosaComponent } from './components/alumnosa/alumnosa.component';
import { ProfesaComponent } from './components/profesa/profesa.component';

const inicioaRoutes: Routes = [
  { path: 'inicioA', component: PrincipalaComponent, pathMatch: 'full' },
  { path: 'alumnosC', component: AlumnosaComponent, pathMatch: 'full' },
  { path: 'profesC', component: ProfesaComponent, pathMatch: 'full' }
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
