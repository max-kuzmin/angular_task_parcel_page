import { Component, OnInit, Input } from '@angular/core';
import { ParcelSubType } from '../models/ParcelSubType';

@Component({
  selector: 'app-parcel-subtype-field',
  templateUrl: './parcel-subtype-field.component.html',
  styleUrls: ['./parcel-subtype-field.component.css']
})
export class ParcelSubtypeFieldComponent implements OnInit {
  @Input() parcelSubTypes: ParcelSubType[];
  constructor() { }

  ngOnInit() {
  }

}
