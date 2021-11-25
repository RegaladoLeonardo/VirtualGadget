import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { PrincipalComponent } from './components/principal/principal.component';
import { AuthModule } from '../auth/auth.module';
import { SinginComponent } from '../auth/components/singin/singin.component';
import { TutorialComponent } from './components/tutorial/tutorial.component';
import { PerfilalumnoComponent } from './components/perfilalumno/perfilalumno.component';
import { FtutorialComponent } from './components/ftutorial/ftutorial.component';
import { StutorialComponent } from './components/stutorial/stutorial.component';

const inicioRoutes: Routes = [
  { path: 'inicio', component: PrincipalComponent, pathMatch: 'full' },
  { path: 'tutorial', component: TutorialComponent, pathMatch: 'full' },
  { path: 'perfil', component:  PerfilalumnoComponent, pathMatch: 'full' },
  { path: 'tuto1', component:  FtutorialComponent, pathMatch: 'full' },
  { path: 'tuto2', component:  StutorialComponent, pathMatch: 'full' }
];

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forChild(inicioRoutes)
  ],
  exports: [
    RouterModule
  ]
})
export class InicioRoutingModule { }
