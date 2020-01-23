import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ParcelSubtypeFieldComponent } from './parcel-subtype-field.component';

describe('ParcelSubtypeFieldComponent', () => {
  let component: ParcelSubtypeFieldComponent;
  let fixture: ComponentFixture<ParcelSubtypeFieldComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ParcelSubtypeFieldComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ParcelSubtypeFieldComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
