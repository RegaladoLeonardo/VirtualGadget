import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { Store } from '../../../../app/core/store/store';
@Component({
  selector: 'app-alumnosidebar',
  templateUrl: './alumnosidebar.component.html',
  styleUrls: ['./alumnosidebar.component.css']
})
export class AlumnosidebarComponent implements OnInit {

  public storeSub: Subscription;

  public state: any;
  public username: string = '';
  nombre: string= 'VirtualGadget';
  //name: string = this.storeInfo.name ;
  url: string = 'https://chats-virtualgadget.herokuapp.com/catch'+'?name='+this.nombre;

  constructor(
    private store: Store
  ) {

    this.storeSub = this.store.getObservable.subscribe((store) => {
      this.state = store;
      this.username = store.username;

    })

    console.log("Este es el username");
    console.log(": "+ this.username);
   }

  ngOnInit(): void {
  }





}
