import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChatfComponent } from './chatf.component';

describe('ChatfComponent', () => {
  let component: ChatfComponent;
  let fixture: ComponentFixture<ChatfComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChatfComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ChatfComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
