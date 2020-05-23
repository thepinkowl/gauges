import { Component, OnInit, Input } from '@angular/core';
import { WeekDays } from 'src/utils/week-days.const';

@Component({
  selector: 'app-week-display',
  templateUrl: './week-display.component.html',
  styleUrls: ['./week-display.component.scss'],
})
export class WeekDisplayComponent implements OnInit {

  @Input() when: number[];

  public days = WeekDays;

  constructor() { }

  ngOnInit() { }

}
