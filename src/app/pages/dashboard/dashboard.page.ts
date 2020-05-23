import { Component } from '@angular/core';
import { TasksService } from '../../services/tasks.service';
import { Observable } from 'rxjs';
import Task from 'src/app/models/Task';

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
