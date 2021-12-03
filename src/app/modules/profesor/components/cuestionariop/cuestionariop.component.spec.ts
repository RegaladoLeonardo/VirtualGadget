import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CuestionariopComponent } from './cuestionariop.component';

describe('CuestionariopComponent', () => {
  let component: CuestionariopComponent;
  let fixture: ComponentFixture<CuestionariopComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CuestionariopComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CuestionariopComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
