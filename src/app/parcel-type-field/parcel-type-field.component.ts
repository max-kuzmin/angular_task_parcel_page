import { Component, Input, OnInit, OnChanges } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ReusableForm, CreateProviders } from 'src/app/shared/ReusableForm';
import { ParcelType } from '../models/ParcelType';
import { RestApiService } from '../shared/RestApiService';
import { ParcelSubtype } from '../models/ParcelSubtype';

export class ParcelTypeFieldValues {
  typeId: number = null;
  subTypeId: number = null;
}

@Component({
  selector: 'app-parcel-type-field',
  templateUrl: './parcel-type-field.component.html',
  styleUrls: ['./parcel-type-field.component.css'],
  providers: CreateProviders(ParcelTypeFieldComponent)
})
export class ParcelTypeFieldComponent extends ReusableForm<ParcelTypeFieldValues> implements OnInit, OnChanges {
  @Input() weight: number;
  @Input() isInternational: boolean;
  private allTypes: ParcelType[];

  constructor(
    formBuilder: FormBuilder,
    private restApi: RestApiService
  ) {
    super(formBuilder, {
      typeId: [null, Validators.required],
      subTypeId: []
    });

    this.form.controls.typeId.valueChanges.subscribe(value => {
      if (this.isInternational) {
        this.form.controls.subTypeId.clearValidators();
      } else {
        this.form.controls.subTypeId.setValidators(Validators.required);
      }
    });
  }

  ngOnChanges() {
    this.value = new ParcelTypeFieldValues();
  }

  private get typeInvalid() {
    return this.form.controls.typeId.touched
      && this.form.controls.typeId.invalid;
  }

  private get subTypeInvalid() {
    return this.form.controls.subTypeId.touched
      && this.form.controls.subTypeId.invalid
      && this.currentType
      && this.currentType.subtypes;
  }

  private get currentType(): ParcelType {
    return this.value.typeId
      ? this.allTypes[this.value.typeId]
      : null;
  }

  private get avaliableTypes(): ParcelType[] {
    return this.allTypes
      ? this.allTypes.filter((value, index, array) =>
        value.isInternational === this.isInternational && value.maxWeight >= this.weight)
      : null;
  }

  private get avaliableSubtypes(): ParcelSubtype[] {
    return this.currentType && this.currentType.subtypes
      ? this.currentType.subtypes.filter((value, index, array) =>
        value.maxWeight >= this.weight && value.minWeight <= this.weight)
      : null;
  }

  ngOnInit(): void {
    this.restApi.getParcelTypes().subscribe(data => { this.allTypes = data; });
  }

}
