import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-chat-a',
  templateUrl: './chat-a.component.html',
  styleUrls:  ['../../../../../assets/styles/fondo.css']
})
export class ChatAComponent implements OnInit {

  name: string = "VirtualUsu"
  url: string = 'https://chats-virtualgadget.herokuapp.com/catch?name='+ name;

  public linkCss: Element | null;
  constructor() {
    this.linkCss = document.querySelector('#style-global');
    this.linkCss?.setAttribute('href', './assets/styles/fondo.css');
  }

  ngOnInit(): void {
  }

}
