import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WeightFieldComponent } from './weight-field.component';
import { BaseFieldComponent } from '../base-field/base-field.component';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

describe('WeightFieldComponent', () => {
  let component: WeightFieldComponent;
  let fixture: ComponentFixture<WeightFieldComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WeightFieldComponent, BaseFieldComponent ],
      imports: [ ReactiveFormsModule, HttpClientModule ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WeightFieldComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
