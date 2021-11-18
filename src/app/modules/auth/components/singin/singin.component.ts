import { AfterViewInit, Component, ElementRef, OnDestroy, OnInit } from '@angular/core';

@Component({
  selector: 'app-singin',
  templateUrl: './singin.component.html',
  styleUrls: ['./singin.component.css']
})
export class SinginComponent implements OnInit, OnDestroy, AfterViewInit {


  constructor(private elementRef: ElementRef) {
  }

  ngOnDestroy(): void {
  }

  ngOnInit(): void {
  }

  ngAfterViewInit(){
    this.elementRef.nativeElement.ownerDocument.body.style.backgroundColor = 'purple';
 }


}
