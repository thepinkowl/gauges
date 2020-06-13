import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-task-detail',
  templateUrl: './task-detail.page.html',
  styleUrls: ['./task-detail.page.scss'],
})
export class TaskDetailPage implements OnInit {
  when = [5];
  biWeekly = false;
  now = new Date();

  get lastExecution() {
    return new Date('2020-06-13');
  }

  constructor(private nav: NavController) {
    console.log(nav);
  }

  ngOnInit() {}

  goBack() {
    this.nav.pop();
  }

  log(...args) {
    console.log(args);
  }
}
