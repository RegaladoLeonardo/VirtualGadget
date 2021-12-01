import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Store } from "./../store/store";
import {environment} from "src/environments/environment";
import { Observable, of } from "rxjs";
import { catchError, map, tap, pluck, debounceTime } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})

export class AdminService{
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

            public signinA = (data: any): Observable<any> =>
            this.http.post(`${this.url1}/signinA`, data).pipe(
              tap((res: any) => {

                const {message, rows, tokenReadyL } = res;

                console.log(tokenReadyL);
                console.log('admin: '+ rows.adminN);

                /*

                let alumno = JSON.parse(JSON.stringify(rows[0]));

                localStorage.setItem('token', tokenReadyL);
                localStorage.setItem('username', alumno.username);
                console.log('Username recibido: '+ rows.usuario);
                this.store.setStore({  auth: true, token: tokenReadyL, ...rows});

                console.log("mensaje: "+message);
                console.log('rows'+ JSON.parse(JSON.stringify(rows)) );
                */

                })
            )

/*
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
*/
}
