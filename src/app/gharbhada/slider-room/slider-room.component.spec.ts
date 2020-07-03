import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SliderRoomComponent } from './slider-room.component';

describe('SliderRoomComponent', () => {
  let component: SliderRoomComponent;
  let fixture: ComponentFixture<SliderRoomComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SliderRoomComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SliderRoomComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
