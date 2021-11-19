import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PrincipalpComponent } from './principalp.component';

describe('PrincipalpComponent', () => {
  let component: PrincipalpComponent;
  let fixture: ComponentFixture<PrincipalpComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PrincipalpComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PrincipalpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
