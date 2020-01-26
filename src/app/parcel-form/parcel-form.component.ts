import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Parcel } from '../models/Parcel';
import { TrackingNumberFieldValues } from '../tracking-number-field/tracking-number-field.component';
import { WeightFieldValues } from '../weight-field/weight-field.component';
import { ParcelTypeFieldValues } from '../parcel-type-field/parcel-type-field.component';
import { IndexFieldValues } from '../index-field/index-field.component';
import { RecipientFieldValues } from '../recipient-field/recipient-field.component';
import { RestApiService } from '../shared/RestApiService';

@Component({
  selector: 'app-parcel-form',
  templateUrl: './parcel-form.component.html',
  styleUrls: ['./parcel-form.component.css']
})
export class ParcelFormComponent {
  form: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private restApi: RestApiService) {
    this.form = this.formBuilder.group({
      trackingNumber: [new TrackingNumberFieldValues()],
      weight: [new WeightFieldValues()],
      parcelType: [new ParcelTypeFieldValues()],
      index: [new IndexFieldValues()],
      recipient: [new RecipientFieldValues()]
    });
  }

  get value(): Parcel {
    return this.form.value;
  }

  submit() {
    this.restApi
      .createParcel(this.value)
      .subscribe(value => this.form.reset());
  }

}
