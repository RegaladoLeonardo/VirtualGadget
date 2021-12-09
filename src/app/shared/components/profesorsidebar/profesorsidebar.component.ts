import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-profesorsidebar',
  templateUrl: './profesorsidebar.component.html',
  styleUrls: ['./profesorsidebar.component.css']
})
export class ProfesorsidebarComponent implements OnInit {

  nombre: string | null= localStorage.getItem('id_profe');
  //se tiene que imprimir nombre

  name: string | null = localStorage.getItem('usuario')

  url: string = 'https://chats-virtualgadget.herokuapp.com/catch'+'?name='+this.nombre;

  constructor() { }

  ngOnInit(): void {
  }

}
