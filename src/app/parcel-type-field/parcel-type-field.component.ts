import { Component, Input } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ReusableForm, CreateProviders } from 'src/app/models/ReusableForm';
import { ParcelType } from '../models/ParcelType';

export interface IParcelTypeFieldValues {
  value: string;
}

@Component({
  selector: 'app-parcel-type-field',
  templateUrl: './parcel-type-field.component.html',
  styleUrls: ['./parcel-type-field.component.css'],
  providers: CreateProviders(ParcelTypeFieldComponent)
})
export class ParcelTypeFieldComponent extends ReusableForm<IParcelTypeFieldValues> {
  @Input() parcelTypes: ParcelType[];
  
  constructor(formBuilder: FormBuilder) {
    super(formBuilder, {
      value: ['', Validators.required]
    });
  }

}
