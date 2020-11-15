import { Component, OnInit, OnChanges } from '@angular/core';
import { NavController } from '@ionic/angular';
import { TasksService } from 'src/app/services/tasks.service';
import { Router, ActivatedRoute } from '@angular/router';
import Task from 'src/app/models/Task';

@Component({
  selector: 'app-task-detail',
  templateUrl: './task-detail.page.html',
  styleUrls: ['./task-detail.page.scss'],
})
export class TaskDetailPage implements OnInit {
  now = new Date();
  task: Task = Task.createEmpty();
  new = true;
  lastExecution = this.now.toISOString();

  constructor(
    private nav: NavController,
    private tasksService: TasksService,
    private activatedRoute: ActivatedRoute
  ) { }

  onChange(e: InputEvent) {
    const newDate = new Date((e.detail as any).value);
    this.task.lastDone.setTime(newDate.getTime());
    this.task.computeProgress();
  }

  ngOnInit() {
    this.activatedRoute.params.subscribe(async (params) => {
      this.new = params.id === 'new';
      if (!this.new) {
        const task = await this.tasksService.getTaskById(params.id);
        this.task = task;
        this.lastExecution = task.lastDone.toISOString();
      }
      this.task.computeProgress();
    });
  }

  goBack() {
    this.task.computeProgress();
    if (window.history.length > 2) {
      this.nav.back();
    } else {
      this.nav.navigateBack('/');
    }
  }

  async create() {
    if (this.new) {
      await this.tasksService.createTask(this.task);
      this.goBack();
    }
  }
  async update() {
    if (!this.new) {
      await this.tasksService.updateTask(this.task);
      this.goBack();
    }
  }

  delete() {
    if (!this.new) {
      this.tasksService.deleteTask(this.task);
      this.goBack();
    }
  }
}
