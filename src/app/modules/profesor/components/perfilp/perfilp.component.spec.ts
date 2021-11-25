import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PerfilpComponent } from './perfilp.component';

describe('PerfilpComponent', () => {
  let component: PerfilpComponent;
  let fixture: ComponentFixture<PerfilpComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PerfilpComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PerfilpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
