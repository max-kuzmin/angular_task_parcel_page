import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-parcel-form',
  templateUrl: './parcel-form.component.html',
  styleUrls: ['./parcel-form.component.css']
})
export class ParcelFormComponent implements OnInit {
  parcelForm: FormGroup;

  constructor(private formBuilder: FormBuilder) {
    this.parcelForm = this.formBuilder.group({
      trackingNumber: [],
      /*weight: [],
      parcelType: [],
      parcelSubType: [],
      index: [],
      recipient: []*/
    });
  }

  ngOnInit() {
  }

  submit() {
    console.log(this.parcelForm.value);
  }

}
