import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SliderApartmentComponent } from './slider-apartment.component';

describe('SliderApartmentComponent', () => {
  let component: SliderApartmentComponent;
  let fixture: ComponentFixture<SliderApartmentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SliderApartmentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SliderApartmentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
