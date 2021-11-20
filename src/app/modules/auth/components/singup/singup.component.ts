import { AfterViewInit, Component, ElementRef, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Subscription } from 'rxjs';
import { Store } from 'src/app/core/store/store';
@Component({
  selector: 'app-singup',
  templateUrl: './singup.component.html',
  styleUrls: ['./singup.component.css']
})
export class SingupComponent {

  public storeSub: Subscription;
  public state: any;
  public form!: FormGroup;

  constructor(
    private fb: FormBuilder,
    private store: Store
  ) {
    this.makeForm();
    this.storeSub = this.store.getObservable.subscribe((store) => {
      this.state = store;
  })
  }


  public makeForm(): void {
    this.form = this.fb.group({
      username: new FormControl('', Validators.required),
      password: new FormControl('', Validators.required)
    })
  }


}
