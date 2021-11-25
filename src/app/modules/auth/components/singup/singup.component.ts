
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Subscription } from 'rxjs';
import { Store } from 'src/app/core/store/store';
import { AlertService } from '../../../../core/services/alert.service'

import { AfterViewInit, Component, ElementRef, OnDestroy, OnInit } from '@angular/core';
import { AlumnoService } from '../../../../core/services/alumno.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-singup',
  templateUrl: './singup.component.html',
  styleUrls: ['./singup.component.css']
})
export class SingupComponent {

  public linkCss: Element | null;
  //no es necesario ve
  public storeSub: Subscription;
  public state: any;
  public form!: FormGroup;

  constructor(
    private fb: FormBuilder,
    private store: Store,
    private alumnoService: AlumnoService,
    private alertService: AlertService,
    private router: Router,
  ) {
    this.linkCss = document.querySelector('#style-global');
    this.linkCss?.setAttribute('href', './assets/styles/registro.css');
    this.makeForm();
    this.storeSub = this.store.getObservable.subscribe((store) => {
      this.state = store;
  })
  }



  public makeForm():  FormGroup{
    this.form = this.fb.group({
      username: new FormControl('', [Validators.required, Validators.pattern('/^[0-9a-zA-Z]+$/')]),
      password: new FormControl('', [Validators.required, Validators.pattern('/^[0-9a-zA-Z]+$/')]),
      apellidop: new FormControl('', [Validators.required, Validators.pattern('/^[0-9a-zA-Z]+$/')]),
      apellidom: new FormControl('', [Validators.required, Validators.pattern('/^[0-9a-zA-Z]+$/')]),
      fechaNac: new FormControl('', [Validators.required, Validators.pattern('^(?:3[01]|[12][0-9]|0?[1-9])([\-/.])(0?[1-9]|1[1-2])\1\d{4}$')]),
      email: new FormControl('', [Validators.required, Validators.email]),
      valor: new FormControl(1)
    })
    return this.form
  }


  onSubmit(): void {

    console.log(this.form);
    if(this.form.valid){
      const {...body } = this.form.value;
      this.alumnoService.singup(body).subscribe( res => this.router.navigate(['']), (error) =>
                                                this.alertService.makeNotification('error', 'Error', error.error.message));
    }

  }



}
