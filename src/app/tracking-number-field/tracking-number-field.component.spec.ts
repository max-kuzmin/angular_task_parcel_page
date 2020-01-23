import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TrackingNumberFieldComponent } from './tracking-number-field.component';

describe('TrackingNumberFieldComponent', () => {
  let component: TrackingNumberFieldComponent;
  let fixture: ComponentFixture<TrackingNumberFieldComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TrackingNumberFieldComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TrackingNumberFieldComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
