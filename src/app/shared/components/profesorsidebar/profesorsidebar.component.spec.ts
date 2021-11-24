import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfesorsidebarComponent } from './profesorsidebar.component';

describe('ProfesorsidebarComponent', () => {
  let component: ProfesorsidebarComponent;
  let fixture: ComponentFixture<ProfesorsidebarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProfesorsidebarComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProfesorsidebarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
