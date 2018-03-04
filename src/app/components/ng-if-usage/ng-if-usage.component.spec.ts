import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NgIfUsageComponent } from './ng-if-usage.component';

describe('NgIfUsageComponent', () => {
  let component: NgIfUsageComponent;
  let fixture: ComponentFixture<NgIfUsageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NgIfUsageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NgIfUsageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
