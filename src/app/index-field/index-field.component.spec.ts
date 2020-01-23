import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IndexFieldComponent } from './index-field.component';

describe('IndexFieldComponent', () => {
  let component: IndexFieldComponent;
  let fixture: ComponentFixture<IndexFieldComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IndexFieldComponent ]
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
