import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Store } from "@ngrx/store";
import {environment} from "src/environments/environment";
import { Observable, of } from "rxjs";
import { catchError, map, tap, pluck, debounceTime } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})

export class AlumnoService{

  private url: string;

  constructor(
      private http: HttpClient,
      //private store: Store<appReducer>
  ){
      this.url = environment.url;
  }

  /*
  public singup = (body: { username: string, password: string }): Observable<boolean> =>
  this.http.post<any>(`${this.url}/user/login`, body).pipe(
      map( res => {

      })
  )
*/

}
