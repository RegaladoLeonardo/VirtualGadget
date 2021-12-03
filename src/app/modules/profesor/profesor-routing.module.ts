import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { AuthModule } from '../auth/auth.module';
import { SinginComponent } from '../auth/components/singin/singin.component';
import { PrincipalpComponent } from './components/principalp/principalp.component';
import { ChatfComponent } from './components/chatf/chatf.component';
import { PerfilpComponent } from './components/perfilp/perfilp.component';
import { EscenariospComponent } from './components/escenariosp/escenariosp.component';
import { CuestionariopComponent } from './components/cuestionariop/cuestionariop.component';


const iniciopRoutes: Routes = [
  { path: 'inicioP', component: PrincipalpComponent, pathMatch: 'full' },
  { path: 'chatF', component: ChatfComponent, pathMatch: 'full' },
  { path: 'perfilP', component: PerfilpComponent , pathMatch: 'full' },
  { path: 'escenarioP', component: EscenariospComponent , pathMatch: 'full' },
  { path: 'cuestionarioP', component: CuestionariopComponent , pathMatch: 'full' }

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
