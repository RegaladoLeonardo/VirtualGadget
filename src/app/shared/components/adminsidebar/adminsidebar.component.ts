import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-adminsidebar',
  templateUrl: './adminsidebar.component.html',
  styleUrls: ['./adminsidebar.component.css']
})
export class AdminsidebarComponent implements OnInit {

  name: string | null = localStorage.getItem('name');
  constructor() { }

  ngOnInit(): void {
  }

}
