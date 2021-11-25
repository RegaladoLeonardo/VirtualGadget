import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AlumnosidebarComponent } from './alumnosidebar/alumnosidebar.component';
import { AdminsidebarComponent } from './adminsidebar/adminsidebar.component';
import { ProfesorsidebarComponent } from './profesorsidebar/profesorsidebar.component';
import { AlumnoModule } from '../../modules/alumno/alumno.module';
import { ProfesorModule } from '../../modules/profesor/profesor.module';
import { ProfesornavbarComponent } from './profesornavbar/profesornavbar.component';
import { AlumnonavbarComponent } from './alumnonavbar/alumnonavbar.component';
import { AdminnavbarComponent } from './adminnavbar/adminnavbar.component';
import { RouterModule } from '@angular/router';
import { NabvarpComponent } from './nabvarp/nabvarp.component';



@NgModule({
  declarations: [
    AlumnosidebarComponent,
    AdminsidebarComponent,
    ProfesorsidebarComponent,
    ProfesornavbarComponent,
    AlumnonavbarComponent,
    AdminnavbarComponent,
    NabvarpComponent,
    NabvarpComponent

  ],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports: [
    AlumnosidebarComponent,
    AdminsidebarComponent,
    ProfesorsidebarComponent,
    ProfesornavbarComponent,
    AlumnonavbarComponent,
    AdminnavbarComponent,
    NabvarpComponent
  ]
})
export class ComponentsModule { }
