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
  token: any;

  private url: string;
  private url1: string;


  constructor(
      private http: HttpClient
  ){
      this.url = environment.url[0];
      this.url1 = environment.url[1];

  }


  public singup = (data: any): Observable<any> =>

                        this.http.post(`${this.url1}/signup`, data)

}
