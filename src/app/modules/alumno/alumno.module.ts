import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { PrincipalComponent } from './components/principal/principal.component';
import { AuthModule } from '../auth/auth.module';
import { TutorialComponent } from './components/tutorial/tutorial.component';
import { MaterialModule } from '../../material.module';
import { ComponentsModule } from '../../shared/components/components.module';
import { PerfilalumnoComponent } from './components/perfilalumno/perfilalumno.component';
import { FtutorialComponent } from './components/ftutorial/ftutorial.component';
import { StutorialComponent } from './components/stutorial/stutorial.component';
import { ChatAComponent } from './components/chat-a/chat-a.component';
import { EscenariosaComponent } from './components/escenariosa/escenariosa.component';
import { CuestionariosaComponent } from './components/cuestionariosa/cuestionariosa.component';
import { PipeModule } from '../../shared/pipes/pipe.module';
import { BibliotecaComponent } from './components/biblioteca/biblioteca.component';

@NgModule({

  declarations: [
    PrincipalComponent,
    TutorialComponent,
    PerfilalumnoComponent,
    FtutorialComponent,
    StutorialComponent,
    ChatAComponent,
    EscenariosaComponent,
    CuestionariosaComponent,
    BibliotecaComponent
  ],
  imports: [
    AuthModule,
    CommonModule,
    RouterModule,
    MaterialModule,
    ComponentsModule,
    PipeModule
  ]
})


export class AlumnoModule { }
