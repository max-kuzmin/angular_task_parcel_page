import { Component } from '@angular/core';
import {
  FormBuilder,
  Validators,
} from '@angular/forms';
import { ReusableForm, CreateProviders } from 'src/app/models/ReusableForm';

export interface ITrackingNumberFieldValues {
  value: string;
}

@Component({
  selector: 'app-tracking-number-field',
  templateUrl: './tracking-number-field.component.html',
  styleUrls: ['./tracking-number-field.component.css'],
  providers : CreateProviders(TrackingNumberFieldComponent)
})
export class TrackingNumberFieldComponent extends ReusableForm<ITrackingNumberFieldValues> {
  hasErrors() {
    return this.form.controls.value.touched && this.form.controls.value.hasError('required')
  }

  constructor(formBuilder: FormBuilder) { 
    super(formBuilder, {
      value: ['', Validators.required]
    });
  }

}
