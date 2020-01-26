import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IndexFieldComponent } from './index-field.component';
import { BaseFieldComponent } from '../base-field/base-field.component';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

describe('IndexFieldComponent', () => {
  let component: IndexFieldComponent;
  let fixture: ComponentFixture<IndexFieldComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IndexFieldComponent, BaseFieldComponent ],
      imports: [ ReactiveFormsModule, HttpClientModule ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IndexFieldComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
