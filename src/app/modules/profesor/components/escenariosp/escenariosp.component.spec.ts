import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EscenariospComponent } from './escenariosp.component';

describe('EscenariospComponent', () => {
  let component: EscenariospComponent;
  let fixture: ComponentFixture<EscenariospComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EscenariospComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EscenariospComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
