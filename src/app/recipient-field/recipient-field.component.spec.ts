import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RecipientFieldComponent } from './recipient-field.component';

describe('RecipientFieldComponent', () => {
  let component: RecipientFieldComponent;
  let fixture: ComponentFixture<RecipientFieldComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RecipientFieldComponent ]
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
