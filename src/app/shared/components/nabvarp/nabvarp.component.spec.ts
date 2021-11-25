import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NabvarpComponent } from './nabvarp.component';

describe('NabvarpComponent', () => {
  let component: NabvarpComponent;
  let fixture: ComponentFixture<NabvarpComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NabvarpComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NabvarpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
