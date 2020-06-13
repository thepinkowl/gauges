import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-gauge',
  templateUrl: './gauge.component.html',
  styleUrls: ['./gauge.component.scss'],
})
export class GaugeComponent implements OnInit {
  @Input() percentage: number;

  constructor() { }

  ngOnInit() { }

  getColor() {
    if (this.percentage > 50) {
      return '#2AC940';
    } else if (this.percentage > 25) {
      return '#FA9917';
    } else {
      return '#FF3366';
    }
  }

  progress() {
    return Math.max(3, this.percentage);
  }
}
