import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SliderFlatComponent } from './slider-flat.component';

describe('SliderFlatComponent', () => {
  let component: SliderFlatComponent;
  let fixture: ComponentFixture<SliderFlatComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SliderFlatComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SliderFlatComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
