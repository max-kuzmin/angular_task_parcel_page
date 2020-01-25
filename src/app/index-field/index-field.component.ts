import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ReusableForm, CreateProviders } from 'src/app/models/ReusableForm';

export interface IIndexFieldValues {
  value: string;
}

@Component({
  selector: 'app-index-field',
  templateUrl: './index-field.component.html',
  styleUrls: ['./index-field.component.css'],
  providers: CreateProviders(IndexFieldComponent)
})
export class IndexFieldComponent extends ReusableForm<IIndexFieldValues> {
  constructor(formBuilder: FormBuilder) {
    super(formBuilder, {
      value: ['', [
        Validators.required,
        Validators.pattern("(^\\d{6}$)|(^\\D[\\w\\W]{2,}$)")]]
    });
  }

}
