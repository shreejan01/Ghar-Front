import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DraftBillComponent } from './draft-bill.component';

describe('DraftBillComponent', () => {
  let component: DraftBillComponent;
  let fixture: ComponentFixture<DraftBillComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DraftBillComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DraftBillComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
