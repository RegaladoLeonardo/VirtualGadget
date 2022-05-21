import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-principalp',
  templateUrl: './principalp.component.html',
  styleUrls: ['./principalp.component.css']
})
export class PrincipalpComponent implements OnInit {

  public nombrePro = localStorage.getItem('usuario');
  constructor() { }

  ngOnInit(): void {
  }

}
