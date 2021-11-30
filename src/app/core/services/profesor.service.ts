import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Store } from "./../store/store";
import {environment} from "src/environments/environment";
import { Observable, of } from "rxjs";
import { catchError, map, tap, pluck, debounceTime } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})

export class ProfesorService{
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

/*
  public singup = (data: any): Observable<any> =>
              this.http.post(`${this.url1}/signup`, data).pipe(
                tap((res: any) => {
                  const { tokenReady, Usu, resultadoT } = res;
                  console.log(tokenReady);
                  console.log('del verify: '+ resultadoT);
                  this.store.setStore({  auth: true, token: tokenReady, ...Usu});

                  //this.saveToken(token, remember);
                  //this.store.dispatch(login({ user, token }));
                  //this.saveToken(token)return true;

                  localStorage.setItem('token',tokenReady);
                  })
              )
    */

            public signinP = (data: any): Observable<any> =>
            this.http.post(`${this.url1}/signinp`, data).pipe(
              tap((res: any) => {
/*
                const {message, rows, tokenReadyL } = res;
                localStorage.setItem('token', tokenReadyL);

                console.log("mensaje: "+message);
                console.log('rows'+ JSON.parse(JSON.stringify(rows)) );
                */


                })
            )






}
