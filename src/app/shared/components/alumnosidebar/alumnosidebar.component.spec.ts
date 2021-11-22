import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AlumnosidebarComponent } from './alumnosidebar.component';

describe('AlumnosidebarComponent', () => {
  let component: AlumnosidebarComponent;
  let fixture: ComponentFixture<AlumnosidebarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AlumnosidebarComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AlumnosidebarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
