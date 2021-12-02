import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AlumnosaComponent } from './alumnosa.component';

describe('AlumnosaComponent', () => {
  let component: AlumnosaComponent;
  let fixture: ComponentFixture<AlumnosaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AlumnosaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AlumnosaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
