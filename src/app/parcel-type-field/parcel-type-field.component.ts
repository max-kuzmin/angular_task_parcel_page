import { Component, OnInit, Input } from '@angular/core';
import { ParcelType } from '../models/ParcelType';

@Component({
  selector: 'app-parcel-type-field',
  templateUrl: './parcel-type-field.component.html',
  styleUrls: ['./parcel-type-field.component.css']
})
export class ParcelTypeFieldComponent implements OnInit {
  @Input() parcelTypes: ParcelType[];
  constructor() { }

  ngOnInit() {
  }

}
