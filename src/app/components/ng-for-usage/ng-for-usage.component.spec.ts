import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NgForUsageComponent } from './ng-for-usage.component';

describe('NgForUsageComponent', () => {
  let component: NgForUsageComponent;
  let fixture: ComponentFixture<NgForUsageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NgForUsageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NgForUsageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
