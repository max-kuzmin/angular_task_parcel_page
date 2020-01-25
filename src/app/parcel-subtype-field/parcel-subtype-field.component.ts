import { Component, Input } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ReusableForm, CreateProviders } from 'src/app/shared/ReusableForm';
import { ParcelSubType } from '../models/ParcelSubType';

export interface IParcelSubTypeFieldValues {
  value: string;
}

@Component({
  selector: 'app-parcel-subtype-field',
  templateUrl: './parcel-subtype-field.component.html',
  styleUrls: ['./parcel-subtype-field.component.css'],
  providers: CreateProviders(ParcelSubtypeFieldComponent)
})
export class ParcelSubtypeFieldComponent extends ReusableForm<IParcelSubTypeFieldValues> {
  @Input() parcelSubTypes: ParcelSubType[];
  
  constructor(formBuilder: FormBuilder) {
    super(formBuilder, {
      value: ['', Validators.required]
    });
  }

}
