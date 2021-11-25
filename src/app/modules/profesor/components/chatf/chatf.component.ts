import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-chatf',
  templateUrl: './chatf.component.html',
  styleUrls: ['./chatf.component.css']
})
export class ChatfComponent implements OnInit {

  name: string = "VirtualAdmin"
  url: string = 'http://localhost:3000/catch?name=leonardo';

  public linkCss: Element | null;
  constructor() {
    this.linkCss = document.querySelector('#style-global');
    this.linkCss?.setAttribute('href', './assets/styles/fondo.css');
  }

  ngOnInit(): void {
  }

}
