import { Component } from '@angular/core';
import { Task, TasksService } from '../../services/tasks.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-dashboard',
  templateUrl: 'dashboard.page.html',
  styleUrls: ['dashboard.page.scss'],
})
export class DashBoardPage {
  constructor(private tasksService: TasksService) { }

  public tasks: Observable<Task[]>;

  ionViewWillEnter() {
    this.tasks = this.tasksService.getTasks();
  }

}
