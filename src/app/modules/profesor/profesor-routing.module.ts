import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { AuthModule } from '../auth/auth.module';
import { SinginComponent } from '../auth/components/singin/singin.component';
import { PrincipalpComponent } from './components/principalp/principalp.component';

const iniciopRoutes: Routes = [
  { path: 'inicioP', component: PrincipalpComponent, pathMatch: 'full' }
];

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forChild(iniciopRoutes)
  ],
  exports: [
    RouterModule
  ]
})
export class IniciopRoutingModule { }
