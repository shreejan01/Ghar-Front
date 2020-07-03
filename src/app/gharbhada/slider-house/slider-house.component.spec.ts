import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SliderHouseComponent } from './slider-house.component';

describe('SliderHouseComponent', () => {
  let component: SliderHouseComponent;
  let fixture: ComponentFixture<SliderHouseComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SliderHouseComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SliderHouseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
