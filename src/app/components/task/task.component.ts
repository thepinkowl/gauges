import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { IonItemSliding, NavController } from '@ionic/angular';
import { Task } from 'src/app/services/tasks.service';

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.scss'],
})
export class TaskComponent implements OnInit {

  @Input() task: Task;
  @ViewChild(IonItemSliding) slider: IonItemSliding;

  constructor(private nav: NavController) { }

  ngOnInit() { }

  edit() {
    this.nav.navigateForward(`/task/${this.task.id}`);
    this.slider.closeOpened();
  }

  delete() {
    this.slider.closeOpened();
  }
}
