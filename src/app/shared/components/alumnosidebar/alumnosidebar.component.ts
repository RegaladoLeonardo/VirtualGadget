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
  //public username!: string = localStorage.getItem('username') ;
  public username:string | null='';


  nombre: string= 'VirtualGadget';
  //name: string = this.storeInfo.name ;
  url: string = 'https://chats-virtualgadget.herokuapp.com/catch'+'?name='+this.nombre;

  constructor(
    private store: Store
  ) {
    console.log('Del sidebar: '+ localStorage.getItem('usuario'));
    this.storeSub = this.store.getObservable.subscribe((store) => {
      this.state = store;
      //this.username = store.username;


    })
    this.username = localStorage.getItem('usuario');

   }

  ngOnInit(): void {
  }





}
