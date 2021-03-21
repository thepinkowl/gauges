import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NavController } from '@ionic/angular';
import Task from 'src/app/models/Task';
import { CategoriesService } from 'src/app/services/categories.service';
import { GroupsService } from 'src/app/services/groups.service';
import { TasksService } from 'src/app/services/tasks.service';
import { Group } from 'src/app/services/user.service';

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
    public groupsService: GroupsService,
    public categoriesService: CategoriesService,
    private activatedRoute: ActivatedRoute
  ) {
    this.groupsService.groups.subscribe((groups: Group[]) => {
      if (this.new) this.task.gid = groups[0].gid
    })
  }

  onChange(e: InputEvent) {
    const newDate = new Date((e.detail as any).value);
    this.task.executions = [newDate];
    this.task.computeProgress();
  }

  deleteTime(e: Event, index: number) {
    this.lastExecution = undefined;
    const executions = [...this.task.executions];
    executions.splice(index, 1);
    this.task.executions = executions;
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
      if (!this.task.gid || this.task.gid === '') {
        return;
      }
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
