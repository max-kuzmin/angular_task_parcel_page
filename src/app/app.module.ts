import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { TrackingNumberFieldComponent } from './tracking-number-field/tracking-number-field.component';
import { WeightFieldComponent } from './weight-field/weight-field.component';
import { ParcelTypeFieldComponent } from './parcel-type-field/parcel-type-field.component';
import { ParcelSubtypeFieldComponent } from './parcel-subtype-field/parcel-subtype-field.component';
import { IndexFieldComponent } from './index-field/index-field.component';
import { SurnameFieldComponent } from './surname-field/surname-field.component';
import { BaseFieldComponent } from './base-field/base-field.component';

@NgModule({
  declarations: [
    AppComponent,
    TrackingNumberFieldComponent,
    WeightFieldComponent,
    ParcelTypeFieldComponent,
    ParcelSubtypeFieldComponent,
    IndexFieldComponent,
    SurnameFieldComponent,
    BaseFieldComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
