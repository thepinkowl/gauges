import { Component, OnInit } from '@angular/core';
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
  when = [5];
  biWeekly = false;
  now = new Date();
  task: Task = Task.createEmpty();
  new = true;

  get lastExecution() {
    return new Date('2020-06-13');
  }

  constructor(
    private nav: NavController,
    private tasksService: TasksService,
    private activatedRoute: ActivatedRoute
  ) {}

  ngOnInit() {
    this.activatedRoute.params.subscribe(async (params) => {
      this.new = params.id === 'new';

      if (!this.new) {
        const task = await this.tasksService.getTaskById(params.id);
        this.task = task;
      }
    });
  }

  goBack() {
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
