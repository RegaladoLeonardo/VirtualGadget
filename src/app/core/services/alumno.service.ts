import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Store } from "./../store/store";
import {environment} from "src/environments/environment";
import { Observable, of } from "rxjs";
import { catchError, map, tap, pluck, debounceTime } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})

export class AlumnoService{
  token: any;

  private url: string;
  private url1: string;


  constructor(
    private store: Store,
    private http: HttpClient
  ){
      this.url = environment.url[0];
      this.url1 = environment.url[1];

  }


  public singup = (data: any): Observable<any> =>
              this.http.post(`${this.url1}/signup`, data).pipe(
                tap((res: any) => {
                  const { tokenReady, Usu, resultadoT } = res;
                  console.log(tokenReady);
                  console.log('del verify: '+ resultadoT);
                  this.store.setStore({  auth: true, token: tokenReady, ...Usu});
                  /*
                  this.saveToken(token, remember);
                  this.store.dispatch(login({ user, token }));
                  return true;
                  */
                  localStorage.setItem('token', res.Usu.tokenReady);
                  })
              )

            public signin = (data: any): Observable<any> =>
            this.http.post(`${this.url1}/signin`, data).pipe(
              tap((res: any) => {



                })
            )


  public verify = (token: any): Observable<any> => {

    const headers = new HttpHeaders({token});
    return this.http.get(`${this.url1}/verifyToken`, { headers } ).pipe(
      tap((res: any) => {
        const { resultadoT } =  res;

        res.status(200);
        console.log('res: '+res);
        console.log('resultado: '+ resultadoT);
      })

      )
  }



}
