import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

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
      parcelSubtype: [],
      index: [],
      recipient: [{value: '', isOrganization: false}]
    });
  }

  submit() {
    console.log(this.form.value);
  }

}
