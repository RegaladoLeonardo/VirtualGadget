import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfesaComponent } from './profesa.component';

describe('ProfesaComponent', () => {
  let component: ProfesaComponent;
  let fixture: ComponentFixture<ProfesaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProfesaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProfesaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
