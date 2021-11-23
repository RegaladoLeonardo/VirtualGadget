import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PrincipalpComponent } from './components/principalp/principalp.component';
import { RouterModule } from '@angular/router';
import { AuthModule } from '../auth/auth.module';
import { ComponentsModule } from '../../shared/components/components.module';
import { MaterialModule } from 'src/app/material.module';


@NgModule({
  declarations: [
    PrincipalpComponent
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
