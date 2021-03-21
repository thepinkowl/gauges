import { Component, OnDestroy, ViewChild } from '@angular/core';
import { IonList } from '@ionic/angular';
import { Observable, Subscription } from 'rxjs';
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
export class DashBoardPage implements OnDestroy {
  constructor(private tasksService: TasksService) { }

  @ViewChild(IonList) list: IonList;
  public $tasks: Observable<Task[]>;
  public tasks: Task[] = [];
  private initialTasks: Task[] = [];
  subs: Subscription;

  ngOnDestroy() {
    this.subs.unsubscribe();
  }

  ionViewWillEnter() {
    this.$tasks = this.tasksService.getTasks();
    this.subs = this.$tasks.subscribe(tasks => {
      this.initialTasks = tasks
      this.tasks = tasks
    })
  }

  ionViewDidEnter() {
    this.list.closeSlidingItems();
  }

  public trackById(index: number, task: Task) {
    return task.id;
  }

  filterTasks(event) {
    this.tasks = this.initialTasks.filter(t => t.name.toLowerCase().includes(event.target.value.toLowerCase()))
  }

}
