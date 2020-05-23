import { Component, Input, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { Task } from 'src/app/services/tasks.service';

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.scss'],
})
export class TaskComponent implements OnInit {

  @Input() task: Task;

  constructor(private nav: NavController) { }

  ngOnInit() { }

  edit() {
    this.nav.navigateForward(`/task/${this.task.id}`);
  }
}
