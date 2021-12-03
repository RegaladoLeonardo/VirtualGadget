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
                  const { tokenReady, Usu } = res;
                  console.log(tokenReady);
                  //console.log('del verify: '+ resultadoT);

                  this.store.setStore({  auth: true, token: tokenReady, valor: Usu.valor});
                  /*
                  this.saveToken(token, remember);
                  this.store.dispatch(login({ user, token }));
                  return true;
                  */
                  console.log('Usu:'+ Usu.usuario+'y valor '+ Usu.valor);
                  console.log('nombre: '+ Usu.nombre);


                  localStorage.setItem('token',tokenReady);
                  localStorage.setItem('usuario', Usu.usuario);
                  localStorage.setItem('nombre', Usu.nombre);
                  localStorage.setItem('app', Usu.app);
                  localStorage.setItem('apm', Usu.apm);
                  localStorage.setItem('email', Usu.email);
                  localStorage.setItem('fechaNac', Usu.fechadenacimiento);
                  })
              )

            public signin = (data: any): Observable<any> =>
            this.http.post(`${this.url1}/signin`, data).pipe(
              tap((res: any) => {

                const {message, rows, tokenReadyL } = res;

                let alumno = JSON.parse(JSON.stringify(rows[0]));
                console.log(alumno);

                localStorage.setItem('token', tokenReadyL);
                localStorage.setItem('usuario', rows.usuario);
                console.log('Username recibido: '+ rows.usuario);
                this.store.setStore({  auth: true, token: tokenReadyL, ...rows});

                console.log("nombre: "+ rows.nombre);
                //console.log('rows'+ JSON.parse(JSON.stringify(rows)) );

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
