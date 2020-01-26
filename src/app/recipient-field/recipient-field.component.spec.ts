import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RecipientFieldComponent } from './recipient-field.component';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { BaseFieldComponent } from '../base-field/base-field.component';

describe('RecipientFieldComponent', () => {
  let component: RecipientFieldComponent;
  let fixture: ComponentFixture<RecipientFieldComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RecipientFieldComponent, BaseFieldComponent ],
      imports: [ ReactiveFormsModule, HttpClientModule ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RecipientFieldComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
