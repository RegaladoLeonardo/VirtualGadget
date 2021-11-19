import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './modules/home/components/home/home.component';

const routes: Routes = [
  {
    path: 'auth',
    loadChildren: (): Promise<any> => import('./modules/auth/auth-routing.module').then( module => module.AuthRoutingModule ),
  },
  {
    path: 'alumno',
    loadChildren: (): Promise<any> => import('./modules/alumno/alumno-routing.module').then( module => module.InicioRoutingModule ),
  },


  {

    path: '',
    loadChildren: (): Promise<any> => import('./modules/home/home-routing.module').then( module => module.HomeRoutingModule ),
    pathMatch: 'full',

    /*
    path: '',
    component: HomeComponent,
    pathMatch: 'full',
    */
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
