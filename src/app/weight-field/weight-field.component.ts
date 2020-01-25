import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ReusableForm, CreateProviders } from 'src/app/shared/ReusableForm';

export class WeightFieldValues {
  value: number = null;
}

@Component({
  selector: 'app-weight-field',
  templateUrl: './weight-field.component.html',
  styleUrls: ['./weight-field.component.css'],
  providers: CreateProviders(WeightFieldComponent)
})
export class WeightFieldComponent extends ReusableForm<WeightFieldValues> {
  constructor(formBuilder: FormBuilder) {
    super(formBuilder, {
      value: [null, [
        Validators.required,
        Validators.min(1)]]
    });
  }

}
