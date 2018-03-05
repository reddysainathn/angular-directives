import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NgSwitchCaseUsageComponent } from './ng-switch-case-usage.component';

describe('NgSwitchCaseUsageComponent', () => {
  let component: NgSwitchCaseUsageComponent;
  let fixture: ComponentFixture<NgSwitchCaseUsageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NgSwitchCaseUsageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NgSwitchCaseUsageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
