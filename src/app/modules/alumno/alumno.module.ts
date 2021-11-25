import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { PrincipalComponent } from './components/principal/principal.component';
import { AuthModule } from '../auth/auth.module';
import { TutorialComponent } from './components/tutorial/tutorial.component';
import { NavbarAComponent } from './components/navbar-a/navbar-a.component';
import { MaterialModule } from '../../material.module';
import { ComponentsModule } from '../../shared/components/components.module';
import { PerfilalumnoComponent } from './components/perfilalumno/perfilalumno.component';
import { FtutorialComponent } from './components/ftutorial/ftutorial.component';
import { StutorialComponent } from './components/stutorial/stutorial.component';

@NgModule({

  declarations: [
    PrincipalComponent,
    TutorialComponent,
    NavbarAComponent,
    PerfilalumnoComponent,
    FtutorialComponent,
    StutorialComponent
  ],
  imports: [
    AuthModule,
    CommonModule,
    RouterModule,
    MaterialModule,
    ComponentsModule
  ]
})


export class AlumnoModule { }
