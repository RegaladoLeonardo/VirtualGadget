
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class Store {

  public state: any = {};
  public storeObs: BehaviorSubject<any> = new BehaviorSubject(this.state);

  constructor() {}

  public get getObservableStore() {
    return this.storeObs.asObservable();
  }

  public set setStore(data: any) {
    this.state = { ...this.state, ...data };
    this.storeObs.next(this.state);
  }
}
