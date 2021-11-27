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
      private http: HttpClient
  ){
      this.url = environment.url;
  }


  public singup = (data: any): Observable<any> =>
                        of(true)
                        //this.http.post(`${this.url}/user/add`, data)

}
