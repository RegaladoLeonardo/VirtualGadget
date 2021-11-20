import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, CanActivate, CanLoad, Route, RouterStateSnapshot } from "@angular/router";
import { Observable } from "rxjs";
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})

export class AdminGuard implements CanLoad, CanActivate {

  constructor(
    private router: Router
  ) {}


  canLoad(
    route: Route
  ): Observable<boolean> | Promise<boolean> | boolean {



     return true;
  }
  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    return true;
  }
}
