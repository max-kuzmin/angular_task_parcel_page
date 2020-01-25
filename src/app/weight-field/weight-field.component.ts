import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ReusableForm, CreateProviders } from 'src/app/shared/ReusableForm';

export interface IWeightFieldValues {
  value: string;
}

@Component({
  selector: 'app-weight-field',
  templateUrl: './weight-field.component.html',
  styleUrls: ['./weight-field.component.css'],
  providers: CreateProviders(WeightFieldComponent)
})
export class WeightFieldComponent extends ReusableForm<IWeightFieldValues> {
  constructor(formBuilder: FormBuilder) {
    super(formBuilder, {
      value: ['', [
        Validators.required,
        Validators.min(1)]]
    });
  }

}
