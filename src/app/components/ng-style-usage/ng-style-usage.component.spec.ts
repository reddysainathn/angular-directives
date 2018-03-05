import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NgStyleUsageComponent } from './ng-style-usage.component';

describe('NgStyleUsageComponent', () => {
  let component: NgStyleUsageComponent;
  let fixture: ComponentFixture<NgStyleUsageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NgStyleUsageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NgStyleUsageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
