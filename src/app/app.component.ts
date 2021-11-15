import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  public linkCss: Element | null;

  constructor() {
    this.linkCss = document.querySelector('#style-global');

    console.log(this.linkCss?.getAttribute('href'));
  }

}
