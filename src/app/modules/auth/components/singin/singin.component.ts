import { AfterViewInit, Component, ElementRef, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { Store } from 'src/app/core/store/store';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-singin',
  templateUrl: './singin.component.html',
  styleUrls: ['./singin.component.css']
})
export class SinginComponent implements OnInit, OnDestroy, AfterViewInit {

  public linkCss: Element | null;
  public storeSub: Subscription;
  public state: any;
  public form!: FormGroup;

  constructor(
    private elementRef: ElementRef,
    private store: Store,
    private fb: FormBuilder
  ) {
    this.makeForm();
    this.linkCss = document.querySelector('#style-global');
    this.linkCss?.setAttribute('href', './assets/styles/login.css');
    this.storeSub = this.store.getObservable.subscribe((store) => {
      this.state = store;
      console.log(this.state);
    });

  }

  public makeForm(): void {
    this.form = this.fb.group({
      username: new FormControl('', Validators.required),
      password: new FormControl('', Validators.required)
    })
  }

  onSubmit(): void {
    console.log(this.form);
  }


  public click() {
    this.store.setStore({contador: this.state.contador + 1, bandera: true});
  }

  ngOnDestroy(): void {
    this.storeSub.unsubscribe();
  }

  ngOnInit(): void {
  }

  ngAfterViewInit(){
    this.elementRef.nativeElement.ownerDocument.body.style.backgroundColor = '';
 }


}
