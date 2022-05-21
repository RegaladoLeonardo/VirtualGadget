import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InicioeComponent } from './inicioe.component';

describe('InicioeComponent', () => {
  let component: InicioeComponent;
  let fixture: ComponentFixture<InicioeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InicioeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InicioeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
