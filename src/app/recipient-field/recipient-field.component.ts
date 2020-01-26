import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ReusableForm, CreateProviders } from 'src/app/shared/ReusableForm';

export class RecipientFieldValues {
  value: string = null;
  isOrganization = false;
}

@Component({
  selector: 'app-recipient-field',
  templateUrl: './recipient-field.component.html',
  styleUrls: ['./recipient-field.component.css'],
  providers: CreateProviders(RecipientFieldComponent)
})
export class RecipientFieldComponent extends ReusableForm<RecipientFieldValues> {
  constructor(formBuilder: FormBuilder) {
    super(formBuilder, {
      value: [null, [
        Validators.required]],
      isOrganization: [false]
    });
  }

}
