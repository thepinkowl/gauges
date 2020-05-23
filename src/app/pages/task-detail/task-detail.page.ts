import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-task-detail',
  templateUrl: './task-detail.page.html',
  styleUrls: ['./task-detail.page.scss'],
})
export class TaskDetailPage implements OnInit {

  when = [5];

  constructor(private nav: NavController) { }

  ngOnInit() {
  }

  goBack() {
    this.nav.pop();
  }

}
