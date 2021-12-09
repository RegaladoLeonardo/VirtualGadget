import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, CanActivate, CanLoad, Route, RouterStateSnapshot } from "@angular/router";
import { Observable } from "rxjs";
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})

export class AdminGuard implements CanLoad, CanActivate {
/*
  username: string =  'Admin90E7';
  password: string = 'VGproyecto9';
*/
  constructor(
    private router: Router
  ){

  }


  canLoad(
    route: Route,
  ): Observable<boolean> | Promise<boolean> | boolean {


    if(localStorage.length > 0 && localStorage.getItem('valor')=='1'){
      console.log('Hay alguien logeado');
      let token  = localStorage.getItem('token');

      console.log('Token para verificar: '+ token );
    }else{
      this.router.navigateByUrl('/auth/login');
      console.log('no hay alguien logeado');
    }

     return true;
  }


  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    return true;
  }
}
