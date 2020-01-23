import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ParcelTypeFieldComponent } from './parcel-type-field.component';

describe('ParcelTypeFieldComponent', () => {
  let component: ParcelTypeFieldComponent;
  let fixture: ComponentFixture<ParcelTypeFieldComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ParcelTypeFieldComponent ]
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
