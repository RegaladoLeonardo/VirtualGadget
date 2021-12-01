
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

  //no es necesario ve
  public storeSub: Subscription;
  public state: any;
  public form!: FormGroup;
  public sumbited: boolean = false;


  constructor(
    private fb: FormBuilder,
    private store: Store,
    private alumnoService: AlumnoService,
    private alertService: AlertService,
    private router: Router,
  ) {
    this.makeForm();
    this.storeSub = this.store.getObservable.subscribe((store) => {
      this.state = store;
  })

  }



  public makeForm():  FormGroup{
    this.form = this.fb.group({
      usuario: new FormControl('', [Validators.required, Validators.pattern(/^[0-9a-zA-Z ]+$/)]),
      name: new FormControl('', [Validators.required, Validators.pattern(/^[0-9a-zA-Z ]+$/)]),
      contraseña: new FormControl('', [Validators.required, Validators.pattern(/^[0-9a-zA-Z ]+$/)]),
      apellidop: new FormControl('', [Validators.required, Validators.pattern(/^[0-9a-zA-Z ]+$/)]),
      apellidom: new FormControl('', [Validators.required, Validators.pattern(/^[0-9a-zA-Z ]+$/)]),
      fechaNac: new FormControl('', [Validators.required]),
      email: new FormControl('', [Validators.required, Validators.email]),
      valor: new FormControl(1)
    })
    return this.form
  }


  onSubmit(): void {

    console.log(this.form);
    this.sumbited = true;
    if(this.form.valid){
      const {...body } = this.form.value;


      this.alumnoService.singup(body).subscribe( res => this.router.navigate(['/alumno/inicio']), (error) =>
                                                this.alertService.makeNotification('error', 'Error', error.error.message));

    }

  }

  public hasError(field: string) {
    const control = this.form.get(field);
    return control?.invalid && (control.touched || this.sumbited);
  }



}
