import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StutorialComponent } from './stutorial.component';

describe('StutorialComponent', () => {
  let component: StutorialComponent;
  let fixture: ComponentFixture<StutorialComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StutorialComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StutorialComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
