import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './modules/home/components/home/home.component';
import { AuthGuard } from './core/guards/auth.guard';

const routes: Routes = [
  {
    path: 'auth',
    loadChildren: (): Promise<any> => import('./modules/auth/auth-routing.module').then( module => module.AuthRoutingModule ),
  },
  {
    path: 'alumno',
    loadChildren: (): Promise<any> => import('./modules/alumno/alumno-routing.module').then( module => module.InicioRoutingModule ),
    canLoad: [AuthGuard]
  },

  {
    path:'profesor',
    loadChildren: (): Promise<any> => import('./modules/profesor/profesor-routing.module').then( module => module.IniciopRoutingModule),
    canLoad: [AuthGuard]
  },
  {
    path: 'admin',
    loadChildren: (): Promise<any> => import('./modules/admin/admin-routing.module').then( module => module.InicioaRoutingModule),
    canLoad: [AuthGuard]

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
  imports: [RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
