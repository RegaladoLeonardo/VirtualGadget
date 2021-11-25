import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CuestionariosaComponent } from './cuestionariosa.component';

describe('CuestionariosaComponent', () => {
  let component: CuestionariosaComponent;
  let fixture: ComponentFixture<CuestionariosaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CuestionariosaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CuestionariosaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
