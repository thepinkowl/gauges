import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { itemsAnimation, listAnimation, testAnimation } from 'src/theme/animations/test.animation';
import Task from 'src/app/models/Task';
import { IonList } from '@ionic/angular';

@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.scss'],
  animations: [itemsAnimation, listAnimation, testAnimation],
})
export class TaskListComponent implements OnInit {
  @ViewChild(IonList) list: IonList;
  @Input('tasks') tasks: Task[];

  constructor() { }

  ngOnInit() { }

  ionViewDidEnter() {
    if (this.list) {
      this.list.closeSlidingItems();
    }
  }

  public trackById(index: number, task: Task) {
    return task.id;
  }

}
