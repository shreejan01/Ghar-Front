import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ClientFooterTopComponent } from './client-footer-top.component';

describe('ClientFooterTopComponent', () => {
  let component: ClientFooterTopComponent;
  let fixture: ComponentFixture<ClientFooterTopComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ClientFooterTopComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ClientFooterTopComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
