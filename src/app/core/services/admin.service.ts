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

                let stat: string = 'true';
                const {message, admin, tokenReadyL } = res;


                localStorage.setItem('token', tokenReadyL);
                localStorage.setItem('valor',admin.valor)
                localStorage.setItem('name', admin.AdminN)
                /*
                console.log('tokenadmin: '+ tokenReadyL );
                localStorage.setItem('valor',rows)

                //console.log(tokenReadyL);
                console.log('admin: '+ rows.adminN);
                localStorage.setItem('status', stat)
*/
                console.log('token del admin: '+ localStorage.getItem('token'));
                console.log('valor: '+ localStorage.getItem('valor'));

                })
            )


            public verify = (token: any): Observable<any> => {

              //const headers = new HttpHeaders({token});
              return this.http.get(`${this.url1}/verifyToken`, token ).pipe(
                tap((res: any) => {

                  const { token } = res;

                  console.log('nuevo token: '+ token);
                  /*
                  const { resultadoT } =  res;

                  res.status(200);
                  console.log('res: '+res);
                  console.log('resultado: '+ resultadoT);
                  */
                })

                )
            }
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
