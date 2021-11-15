import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'auth',
    loadChildren: (): Promise<any> => import('./modules/auth/auth-routing.module').then( module => module.AuthRoutingModule ),
  },
  {
    path: '',
    loadChildren: (): Promise<any> => import('./modules/home/home-routing.module').then( module => module.HomeRoutingModule ),
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
