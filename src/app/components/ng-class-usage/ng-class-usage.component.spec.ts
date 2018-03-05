import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NgClassUsageComponent } from './ng-class-usage.component';

describe('NgClassUsageComponent', () => {
  let component: NgClassUsageComponent;
  let fixture: ComponentFixture<NgClassUsageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NgClassUsageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NgClassUsageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
