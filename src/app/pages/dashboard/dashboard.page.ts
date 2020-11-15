import { Component, ViewChild } from '@angular/core';
import { IonList } from '@ionic/angular';
import { Observable } from 'rxjs';
import Task from 'src/app/models/Task';
import { itemsAnimation, listAnimation, testAnimation } from 'src/theme/animations/test.animation';
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

  @ViewChild(IonList) list: IonList;
  public tasks: Observable<Task[]>;

  ionViewWillEnter() {
    this.tasks = this.tasksService.getTasks();
  }

  ionViewDidEnter() {
    this.list.closeSlidingItems();
  }

  public trackById(index: number, task: Task) {
    return task.id;
  }

}
