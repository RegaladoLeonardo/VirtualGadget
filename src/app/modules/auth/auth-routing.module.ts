import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { SinginComponent } from './components/singin/singin.component';
import { SingupComponent } from './components/singup/singup.component';
import { PoliticasComponent } from './components/politicas/politicas.component';
import { InicioeComponent } from './components/inicioe/inicioe.component';
import { AyudaComponent} from './components/ayuda/ayuda.component'

const authRoutes: Routes = [
  { path: 'login', component: SinginComponent, pathMatch: 'full' },
  { path: 'singup', component: SingupComponent, pathMatch: 'full' },
  { path: 'politics', component: PoliticasComponent, pathMatch: 'full' },
  { path: 'empresa', component: InicioeComponent, pathMatch: 'full' },
  { path: 'ayuda', component: AyudaComponent, pathMatch: 'full' }

];

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forChild(authRoutes)
  ],
  exports: [
    RouterModule
  ]
})
export class AuthRoutingModule { }
