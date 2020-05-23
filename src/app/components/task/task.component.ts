import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { IonItemSliding, NavController } from '@ionic/angular';
import { Task, TasksService } from 'src/app/services/tasks.service';
import { NotificationsService } from 'src/app/services/notifications.service';

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.scss'],
})
export class TaskComponent implements OnInit {

  @Input() task: Task;
  @ViewChild(IonItemSliding) slider: IonItemSliding;

  constructor(private nav: NavController, private tasksService: TasksService) { }

  ngOnInit() { }

  edit() {
    this.nav.navigateForward(`/task/${this.task.id}`);
    this.slider.closeOpened();
  }

  delete() {
    this.tasksService.deleteTask(this.task);
    this.slider.closeOpened();
  }
}
