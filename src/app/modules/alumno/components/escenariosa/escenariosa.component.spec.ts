import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EscenariosaComponent } from './escenariosa.component';

describe('EscenariosaComponent', () => {
  let component: EscenariosaComponent;
  let fixture: ComponentFixture<EscenariosaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EscenariosaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EscenariosaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
