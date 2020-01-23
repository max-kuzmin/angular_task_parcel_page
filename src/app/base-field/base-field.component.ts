import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-base-field',
  templateUrl: './base-field.component.html',
  styleUrls: ['./base-field.component.css']
})
export class BaseFieldComponent implements OnInit {
  @Input() name: string;
  @Input() description: string;
  constructor() { }

  ngOnInit() {
  }

}
