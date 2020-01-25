import { forwardRef, OnDestroy } from '@angular/core';
import {
  ControlValueAccessor,
  NG_VALUE_ACCESSOR,
  FormBuilder,
  FormGroup,
  FormControl,
  NG_VALIDATORS
} from '@angular/forms';
import { Subscription } from 'rxjs';

export class ReusableForm<T> implements ControlValueAccessor, OnDestroy {
  form: FormGroup;
  subscriptions: Subscription[] = [];
  onChange: any = () => { };
  onTouched: any = () => { };

  constructor(private formBuilder: FormBuilder, controlsConfig) {
    this.form = this.formBuilder.group(controlsConfig);
    this.subscriptions.push(
      this.form.valueChanges.subscribe(value => {
        this.onChange(value);
        this.onTouched();
      })
    );
  }

  get invalid() {
    return this.form.controls.value.touched && this.form.controls.value.invalid;
  }
  
  get value(): T {
    return this.form.value;
  }

  set value(value: T) {
    this.form.setValue(value);
    this.onChange(value);
    this.onTouched();
  }

  ngOnDestroy() {
    this.subscriptions.forEach(s => s.unsubscribe());
  }

  registerOnChange(fn) {
    this.onChange = fn;
  }

  writeValue(value: T) {
    if (value) {
      this.value = value;
    }

    if (value === null) {
      this.form.reset();
    }
  }

  registerOnTouched(fn) {
    this.onTouched = fn;
  }

  validate(_: FormControl) {
    return this.form.valid ? null : { value: { valid: false } };
  }
}

export function CreateProviders<T>(component: T) {
  return [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => component),
      multi: true
    },
    {
      provide: NG_VALIDATORS,
      useExisting: forwardRef(() => component),
      multi: true
    }
  ];
}