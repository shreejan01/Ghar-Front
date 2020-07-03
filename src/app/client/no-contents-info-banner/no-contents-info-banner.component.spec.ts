import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NoContentsInfoBannerComponent } from './no-contents-info-banner.component';

describe('NoContentsInfoBannerComponent', () => {
  let component: NoContentsInfoBannerComponent;
  let fixture: ComponentFixture<NoContentsInfoBannerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NoContentsInfoBannerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NoContentsInfoBannerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
