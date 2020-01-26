import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ParcelFormComponent } from './parcel-form.component';
import { TrackingNumberFieldComponent } from '../tracking-number-field/tracking-number-field.component';
import { WeightFieldComponent } from '../weight-field/weight-field.component';
import { ParcelTypeFieldComponent } from '../parcel-type-field/parcel-type-field.component';
import { IndexFieldComponent } from '../index-field/index-field.component';
import { RecipientFieldComponent } from '../recipient-field/recipient-field.component';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { BaseFieldComponent } from '../base-field/base-field.component';

describe('ParcelFormComponent', () => {
  let component: ParcelFormComponent;
  let fixture: ComponentFixture<ParcelFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ 
        ParcelFormComponent,
        BaseFieldComponent,
        TrackingNumberFieldComponent,
        WeightFieldComponent, 
        ParcelTypeFieldComponent,
        IndexFieldComponent,
        RecipientFieldComponent],
        imports: [ ReactiveFormsModule, HttpClientModule ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ParcelFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
