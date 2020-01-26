import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ReusableForm, CreateProviders } from 'src/app/shared/ReusableForm';
import { pairwise } from 'rxjs/operators';

export class TrackingNumberFieldValues {
  value: string = null;
  isInternational: boolean = null;
}

const internationalPattern = '^[A-Z]{2}\\d{9}[A-Z]{2}$';
const localPattern = '^\\d{14}$';

@Component({
  selector: 'app-tracking-number-field',
  templateUrl: './tracking-number-field.component.html',
  styleUrls: ['./tracking-number-field.component.css'],
  providers: CreateProviders(TrackingNumberFieldComponent)
})
export class TrackingNumberFieldComponent extends ReusableForm<TrackingNumberFieldValues> {
  constructor(formBuilder: FormBuilder) {
    super(formBuilder, {
      value: [null, [
        Validators.required,
        Validators.pattern(`(${internationalPattern})|(${localPattern})`)]],
      isInternational: []
    });

    this.form.valueChanges.pipe(pairwise()).subscribe(([prev, next]) => {
      next.isInternational = this.isInternational;
    });
  }

  private get isInternational(): boolean {
    return this.value.value && this.value.value.match(internationalPattern)
      ? true
      : this.value.value && this.value.value.match(localPattern)
        ? false
        : null;
  }

}
