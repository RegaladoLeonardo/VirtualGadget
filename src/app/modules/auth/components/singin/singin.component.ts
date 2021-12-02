import { AfterViewInit, Component, ElementRef, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { Store } from 'src/app/core/store/store';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { AlumnoService } from 'src/app/core/services/alumno.service';
import { Router } from '@angular/router';
import { AlertService } from 'src/app/core/services/alert.service';
import { ProfesorService } from '../../../../core/services/profesor.service';
import { AdminService } from 'src/app/core/services/admin.service';


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
  public formp!: FormGroup;
  public sumbited: boolean = false;
  token: string = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6ImdkZmdkZmciLCJpYXQiOjE2MzgxNzMwNTYsImV4cCI6MTYzODIxNjI1Nn0.FlZpwHXxtVZP_XJfKh4VLcq0w2vi4ykCC0lEcKvf9rQ';

  constructor(
    private elementRef: ElementRef,
    private store: Store,
    private fb: FormBuilder,
    private fp: FormBuilder,
    private alumnoService: AlumnoService,
    private router: Router,
    private alertService: AlertService,
    private profesorService: ProfesorService,
    private adminService: AdminService
  ) {
    this.makeForm();
    this.makeFormP();
    this.linkCss = document.querySelector('#style-global');
    this.linkCss?.setAttribute('href', './assets/styles/home.css');
    this.storeSub = this.store.getObservable.subscribe((store) => {
      this.state = store;
      console.log(this.state);
    });

  }

  public makeForm(): void {
    this.form = this.fb.group({
      usuario: new FormControl('', [Validators.required, Validators.pattern(/^[0-9a-zA-Z ]+$/)]),
      contraseña: new FormControl('', [Validators.required, Validators.pattern(/^[0-9a-zA-Z ]+$/)])
    })
  }

  public hasError(field: string) {
    const control = this.form.get(field);
    return control?.invalid && (control.touched || this.sumbited);
  }

  public makeFormP(): void {
    this.formp = this.fp.group({
      usernamep: new FormControl('', [Validators.required, Validators.pattern(/^[0-9a-zA-Z ]+$/)]),
      passwordp: new FormControl('', [Validators.required, Validators.pattern(/^[0-9a-zA-Z ]+$/)])
    })
  }

  public hasErrorP(field: string) {
    const control = this.formp.get(field);
    return control?.invalid && (control.touched || this.sumbited);
  }

/*
  public click() {
    this.store.setStore({contador: this.state.contador + 1, bandera: true});
    //this.store.setStore({ id: ,username: , nombre: , app:, apm:, fechaNac:, valor:  });
  }


  onSubmit(){

  }
*/
  ngOnDestroy(): void {
    this.storeSub.unsubscribe();
  }

  ngOnInit(): void {
  }

  ngAfterViewInit(){
    this.elementRef.nativeElement.ownerDocument.body.style.backgroundColor = '';
 }


  onSubmit(): void {

  console.log(this.form);
  this.sumbited = true;
  if(this.form.valid){
    const {...body } = this.form.value;
/*
    localStorage.setItem('token', this.token);

    this.alumnoService.verify(localStorage.getItem('token')).subscribe( res => this.router.navigate(['/alumno/inicio']), (error) =>
                                              this.alertService.makeNotification('error', 'Error', error.error.message));
*/

      this.alumnoService.signin(body).subscribe( res => this.router.navigate(['/alumno/inicio']), (error) =>
                                                this.alertService.makeNotification('error', '¡Usuario y/o contraseña incorrecta!', error.error.message));
    }
}


  onSubmitP(): void {

    console.log(this.formp);
    this.sumbited = true;
    const {...body } = this.formp.value;
    if(this.formp.valid){


  console.log('COMPARARE '+body.usernamep+ ' y Admin90E7');
    if(body.usernamep  == 'Admin90E7'){
      console.log('admin entra');
    this.adminService.signinA(body).subscribe( res => this.router.navigate(['/admin/inicioA']), (error) =>
                                                  this.alertService.makeNotification('error', 'Nombre y/o contraseña incorrecta!', error.error.message));
      }else{

        console.log('profesor entra');
        this.profesorService.signinP(body).subscribe( res => this.router.navigate(['/profesor/inicioP']), (error) =>
                                                  this.alertService.makeNotification('error', 'Nombre y/o contraseña incorrecta!', error.error.message));
      }

      }

    }


  }


