import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ReusableForm, CreateProviders } from 'src/app/models/ReusableForm';

export interface ITrackingNumberFieldValues {
  value: string;
}

@Component({
  selector: 'app-tracking-number-field',
  templateUrl: './tracking-number-field.component.html',
  styleUrls: ['./tracking-number-field.component.css'],
  providers: CreateProviders(TrackingNumberFieldComponent)
})
export class TrackingNumberFieldComponent extends ReusableForm<ITrackingNumberFieldValues> {
  constructor(formBuilder: FormBuilder) {
    super(formBuilder, {
      value: ['', [
        Validators.required,
        Validators.pattern("(^[A-Z]{2}\\d{9}[A-Z]{2}$)|(^\\d{14}$)")]]
    });
  }

}
