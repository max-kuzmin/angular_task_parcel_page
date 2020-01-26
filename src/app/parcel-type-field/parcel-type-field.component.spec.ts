import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ParcelTypeFieldComponent } from './parcel-type-field.component';
import { BaseFieldComponent } from '../base-field/base-field.component';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

describe('ParcelTypeFieldComponent', () => {
  let component: ParcelTypeFieldComponent;
  let fixture: ComponentFixture<ParcelTypeFieldComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BaseFieldComponent, ParcelTypeFieldComponent ],
      imports: [ ReactiveFormsModule, HttpClientModule ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ParcelTypeFieldComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
