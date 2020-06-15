import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-week-selector',
  templateUrl: './week-selector.component.html',
  styleUrls: ['./week-selector.component.scss'],
})
export class WeekSelectorComponent implements OnInit {
  value: number[] = [];

  days = [
    { symbol: 'M', day: 1 },
    { symbol: 'T', day: 2 },
    { symbol: 'W', day: 3 },
    { symbol: 'T', day: 4 },
    { symbol: 'F', day: 5 },
    { symbol: 'S', day: 6 },
    { symbol: 'S', day: 0 },
  ];

  @Output() weekChange: EventEmitter<number[]> = new EventEmitter();
  @Input()
  get week() {
    return this.value;
  }
  set week(val) {
    this.value = val;
    this.weekChange.emit(val);
  }

  @Input() biWeekly: boolean;

  constructor() {}

  ngOnInit() {}

  toggle(day) {
    if (this.week.includes(day.day)) {
      this.week = [...this.week.filter((d) => day.day !== d)];
    } else {
      this.week = [...this.week, day.day];
    }
  }
}
