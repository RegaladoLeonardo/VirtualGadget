import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AlumnonavbarComponent } from './alumnonavbar.component';

describe('AlumnonavbarComponent', () => {
  let component: AlumnonavbarComponent;
  let fixture: ComponentFixture<AlumnonavbarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AlumnonavbarComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AlumnonavbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
