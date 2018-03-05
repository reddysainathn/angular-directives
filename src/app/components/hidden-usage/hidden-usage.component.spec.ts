import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HiddenUsageComponent } from './hidden-usage.component';

describe('HiddenUsageComponent', () => {
  let component: HiddenUsageComponent;
  let fixture: ComponentFixture<HiddenUsageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HiddenUsageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HiddenUsageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
