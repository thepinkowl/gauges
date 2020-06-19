import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import Task from 'src/app/models/Task';
import { testAnimation, listAnimation, itemsAnimation } from 'src/theme/animations/test.animation';
import { TasksService } from '../../services/tasks.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: 'dashboard.page.html',
  styleUrls: ['dashboard.page.scss'],
  animations: [
    testAnimation,
    listAnimation,
    itemsAnimation
  ]
})
export class DashBoardPage {
  constructor(private tasksService: TasksService) { }

  public tasks: Observable<Task[]>;

  ionViewWillEnter() {
    this.tasks = this.tasksService.getTasks();
  }

  public trackById(index: number, task: Task) {
    return task.id;
  }

}
