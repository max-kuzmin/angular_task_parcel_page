import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TrackingNumberFieldComponent } from './tracking-number-field.component';
import { BaseFieldComponent } from '../base-field/base-field.component';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

describe('TrackingNumberFieldComponent', () => {
  let component: TrackingNumberFieldComponent;
  let fixture: ComponentFixture<TrackingNumberFieldComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TrackingNumberFieldComponent, BaseFieldComponent ],
      imports: [ ReactiveFormsModule, HttpClientModule ]
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
