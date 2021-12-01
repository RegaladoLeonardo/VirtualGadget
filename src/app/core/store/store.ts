import { Injectable } from '@angular/core';
import { Observable, BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class Store {

  //public store: any = { contador: 0, bandera: true , };
  public store: any = {  auth: false, token: null  };
  public storeObservable: BehaviorSubject<any> = new BehaviorSubject<any>(this.store);

  get getObservable(): Observable<any> {
    return this.storeObservable.asObservable();
  }

  // data: { contador: 1, bandera: true }
  public setStore(data: any): void {
    this.store = { ...this.store, ...data }; // this.store = { contador: 1, bandera: true };
    this.storeObservable.next(this.store);
  }

  public clearStore(): void {
    this.store = { auth: false, token: null }; // this.store = { contador: 1, bandera: true };
    this.storeObservable.next(this.store);
  }
/*
  public resetStore(): void{

    this,
  }
  */
}
