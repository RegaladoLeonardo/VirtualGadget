import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-chatf',
  templateUrl: './chatf.component.html',
  styleUrls: ['./chatf.component.css']
})
export class ChatfComponent implements OnInit {

  private name: string | null = localStorage.getItem('usuario')
  url: string = 'https://chats-virtualgadget.herokuapp.com/catch?name='+ this.name;

  public linkCss: Element | null;
  constructor() {
    this.linkCss = document.querySelector('#style-global');
    this.linkCss?.setAttribute('href', './assets/styles/fondo.css');
  }

  ngOnInit(): void {
  }

}
