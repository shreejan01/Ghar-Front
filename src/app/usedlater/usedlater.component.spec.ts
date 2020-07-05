import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UsedlaterComponent } from './usedlater.component';

describe('UsedlaterComponent', () => {
  let component: UsedlaterComponent;
  let fixture: ComponentFixture<UsedlaterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UsedlaterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UsedlaterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
