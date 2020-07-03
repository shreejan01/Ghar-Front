import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GharbhadaComponent } from './gharbhada.component';

describe('GharbhadaComponent', () => {
  let component: GharbhadaComponent;
  let fixture: ComponentFixture<GharbhadaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GharbhadaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GharbhadaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
