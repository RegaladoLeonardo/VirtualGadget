import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PrincipalpComponent } from './components/principalp/principalp.component';
import { RouterModule } from '@angular/router';
import { AuthModule } from '../auth/auth.module';
import { ComponentsModule } from '../../shared/components/components.module';
import { MaterialModule } from 'src/app/material.module';
import { ChatfComponent } from './components/chatf/chatf.component';
import { PerfilpComponent } from './components/perfilp/perfilp.component';
import { EscenariospComponent } from './components/escenariosp/escenariosp.component';


@NgModule({
  declarations: [
    PrincipalpComponent,
    ChatfComponent,
    PerfilpComponent,
    EscenariospComponent
    ],
  imports: [
    AuthModule,
    CommonModule,
    RouterModule,
    ComponentsModule,
    MaterialModule

  ]
})
export class ProfesorModule { }
