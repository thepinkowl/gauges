import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-gauge',
  templateUrl: './gauge.component.html',
  styleUrls: ['./gauge.component.scss'],
})
export class GaugeComponent implements OnInit {
  @Input() percentage: number;

  constructor() {}

  ngOnInit() {}

  getColor() {
    if (this.percentage > 50) {
      return '#99FF66';
    } else if (this.percentage > 25) {
      return '#FFFF00';
    } else {
      return '#FF3333';
    }
  }
}
