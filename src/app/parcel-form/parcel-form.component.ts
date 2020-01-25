import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Parcel } from '../models/Parcel';

@Component({
  selector: 'app-parcel-form',
  templateUrl: './parcel-form.component.html',
  styleUrls: ['./parcel-form.component.css']
})
export class ParcelFormComponent {
  form: FormGroup;

  constructor(private formBuilder: FormBuilder) {
    this.form = this.formBuilder.group({
      trackingNumber: [],
      weight: [],
      parcelType: [],
      index: [],
      recipient: [{value: '', isOrganization: false}]
    });
  }

  get value(): Parcel {
    return this.form.value;
  }

  submit() {
    console.log(this.form.value);
  }

}
