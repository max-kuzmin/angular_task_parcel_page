import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ReusableForm, CreateProviders } from 'src/app/models/ReusableForm';

export interface IRecipientFieldValues {
  value: string;
  isOrganization: boolean;
}

@Component({
  selector: 'app-recipient-field',
  templateUrl: './recipient-field.component.html',
  styleUrls: ['./recipient-field.component.css'],
  providers: CreateProviders(RecipientFieldComponent)
})
export class RecipientFieldComponent extends ReusableForm<IRecipientFieldValues> {
  constructor(formBuilder: FormBuilder) {
    super(formBuilder, {
      value: ['', [
        Validators.required]],
      isOrganization: [false]
    });
  }

}
