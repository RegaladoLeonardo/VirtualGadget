import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, CanActivate, CanLoad, Route, RouterStateSnapshot } from "@angular/router";
import { Observable } from "rxjs";
import { Router } from '@angular/router';
import { AdminService } from "../services/admin.service";

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanLoad, CanActivate {

  constructor(
    private router: Router,
    private adminService: AdminService
  ) {}

  canLoad(
    route: Route
  ): Observable<boolean> | Promise<boolean> | boolean {
    /*
      Logica
      Si esta logeado
    */

    if(localStorage.length > 0 && localStorage.getItem('valor')=='3'){
      console.log('Hay alguien logeado');
      let token  = localStorage.getItem('token');

      this.adminService.verify(token).subscribe( (error) => this.router.navigate(['/auth/login']));



      console.log('Token para verificar: '+ token );
    }else{
      this.router.navigateByUrl('/auth/login');
      console.log('no hay alguien logeado');
    }
      //this.router.navigateByUrl('/auth/login');
    return true;
  }



  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    return true;
  }

}
