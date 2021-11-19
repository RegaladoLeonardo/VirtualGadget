import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, CanActivate, CanLoad, Route, RouterStateSnapshot } from "@angular/router";
import { Observable } from "rxjs";
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanLoad, CanActivate {

  constructor(
    private router: Router
  ) {}

  canLoad(
    route: Route
  ): Observable<boolean> | Promise<boolean> | boolean {
    /*
      Logica
      Si esta logeado
    */
   this.router.navigateByUrl('/auth/login');
    return false;
  }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    return true;
  }

}
