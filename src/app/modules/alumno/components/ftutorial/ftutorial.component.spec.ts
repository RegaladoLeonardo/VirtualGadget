import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FtutorialComponent } from './ftutorial.component';

describe('FtutorialComponent', () => {
  let component: FtutorialComponent;
  let fixture: ComponentFixture<FtutorialComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FtutorialComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FtutorialComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
