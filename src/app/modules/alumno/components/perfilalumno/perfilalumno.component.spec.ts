import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PerfilalumnoComponent } from './perfilalumno.component';

describe('PerfilalumnoComponent', () => {
  let component: PerfilalumnoComponent;
  let fixture: ComponentFixture<PerfilalumnoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PerfilalumnoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PerfilalumnoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
