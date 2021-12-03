import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-perfilalumno',
  templateUrl: './perfilalumno.component.html',
  styleUrls: ['./perfilalumno.component.css']
})
export class PerfilalumnoComponent implements OnInit {


  usuario = localStorage.getItem('usuario');
  nombre = localStorage.getItem('nombre');
  app = localStorage.getItem('app');
  apm = localStorage.getItem('apm');
  email = localStorage.getItem('email');
  password = localStorage.getItem('password');
  fechaNac = localStorage.getItem('fechaNac');
  constructor() { }

  ngOnInit(): void {
  }

}
