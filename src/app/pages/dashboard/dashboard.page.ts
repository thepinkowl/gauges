import { Component } from '@angular/core';
import { Task, TasksService } from '../../services/tasks.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: 'dashboard.page.html',
  styleUrls: ['dashboard.page.scss'],
})
export class DashBoardPage {
  constructor(private tasksService: TasksService) { }

  public tasks: Task[] = [];

  ionViewWillEnter() {
    this.tasksService.getTasks().then(tasks => this.tasks = tasks);
  }

}
