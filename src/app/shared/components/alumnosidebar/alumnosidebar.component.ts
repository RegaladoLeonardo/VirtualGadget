import { Component, OnDestroy, OnInit } from '@angular/core';

@Component({
  selector: 'app-alumnosidebar',
  templateUrl: './alumnosidebar.component.html',
  styleUrls: ['./alumnosidebar.component.css']
})
export class AlumnosidebarComponent implements OnInit {


  nombre: string= 'VirtualGadget';
  //se tiene que imprimir nombre

  url: string = 'https://chats-virtualgadget.herokuapp.com/catch'+'?name='+this.nombre;

  constructor() { }

  ngOnInit(): void {
  }

}
