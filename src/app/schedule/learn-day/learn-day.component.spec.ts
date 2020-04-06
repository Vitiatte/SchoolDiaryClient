import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LearnDayComponent } from './learn-day.component';

describe('LearnDayComponent', () => {
  let component: LearnDayComponent;
  let fixture: ComponentFixture<LearnDayComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LearnDayComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LearnDayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
