import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SafeTransversalOperatorUsageComponent } from './safe-transversal-operator-usage.component';

describe('SafeTransversalOperatorUsageComponent', () => {
  let component: SafeTransversalOperatorUsageComponent;
  let fixture: ComponentFixture<SafeTransversalOperatorUsageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SafeTransversalOperatorUsageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SafeTransversalOperatorUsageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
