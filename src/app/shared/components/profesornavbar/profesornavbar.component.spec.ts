import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfesornavbarComponent } from './profesornavbar.component';

describe('ProfesornavbarComponent', () => {
  let component: ProfesornavbarComponent;
  let fixture: ComponentFixture<ProfesornavbarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProfesornavbarComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProfesornavbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
