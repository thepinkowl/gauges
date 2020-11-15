import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { IonItemSliding, NavController } from '@ionic/angular';
import Task from 'src/app/models/Task';
import { TasksService } from 'src/app/services/tasks.service';

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.scss']
})
export class TaskComponent implements OnInit {

  @Input() task: Task;
  @ViewChild(IonItemSliding) slider: IonItemSliding;

  constructor(private nav: NavController, private tasksService: TasksService) { }

  ngOnInit() { }

  edit(e: Event) {
    this.slider.close();
    this.nav.navigateForward(`/task/${this.task.id}`);
    e.stopPropagation();
  }

  delete(e: Event) {
    this.slider.close();
    this.tasksService.deleteTask(this.task);
    e.stopPropagation();
  }

  done(e: Event) {
    // TODO: add animation
    this.slider.close();
    this.tasksService.markTaskDone(this.task);
    e.stopPropagation();
  }

  async demo() {
    if (Math.abs(await this.slider.getOpenAmount()) === 0) {
      this.slider.open('start');
      // setTimeout(() => this.slider.close(), 225);
    } else {
      this.slider.closeOpened();
    }
  }
}
