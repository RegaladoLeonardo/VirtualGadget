import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-principal',
  templateUrl: './principal.component.html',
  styleUrls: ['./principal.component.css']
})
export class PrincipalComponent implements OnInit {


  public nombreUsu = localStorage.getItem('usuario');
  constructor() {
  }

  ngOnInit(): void {
  }


}
