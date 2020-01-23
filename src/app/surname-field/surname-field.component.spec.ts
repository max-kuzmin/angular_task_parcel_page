import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SurnameFieldComponent } from './surname-field.component';

describe('SurnameFieldComponent', () => {
  let component: SurnameFieldComponent;
  let fixture: ComponentFixture<SurnameFieldComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SurnameFieldComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SurnameFieldComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
