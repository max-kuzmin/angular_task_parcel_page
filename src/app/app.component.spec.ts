import { TestBed, async } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { ParcelFormComponent } from './parcel-form/parcel-form.component';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { TrackingNumberFieldComponent } from './tracking-number-field/tracking-number-field.component';
import { WeightFieldComponent } from './weight-field/weight-field.component';
import { ParcelTypeFieldComponent } from './parcel-type-field/parcel-type-field.component';
import { IndexFieldComponent } from './index-field/index-field.component';
import { RecipientFieldComponent } from './recipient-field/recipient-field.component';
import { BaseFieldComponent } from './base-field/base-field.component';

describe('AppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        AppComponent,
        BaseFieldComponent,
        ParcelFormComponent,
        TrackingNumberFieldComponent,
        WeightFieldComponent, 
        ParcelTypeFieldComponent,
        IndexFieldComponent,
        RecipientFieldComponent],
        imports: [ ReactiveFormsModule, HttpClientModule ]
    }).compileComponents();
  }));

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  });
});
