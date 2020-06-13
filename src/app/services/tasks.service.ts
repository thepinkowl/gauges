import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import Task, { TaskInterface } from '../models/Task';
import { NotificationsService } from './notifications.service';

const defaultTasks: TaskInterface[] = [
  {
    title: 'Laundry',
    when: [1, 3],
    executions: [
      new Date('2020-05-14T20:06:02.097+02:00'),
      new Date('2020-05-13T20:06:02.097+02:00')
    ],
    id: 0
  },
  {
    title: 'Gardening',
    when: [0, 1, 2],
    executions: [
      new Date('2020-05-16T20:06:02.097+02:00')
    ],
    id: 1
  },
  {
    title: 'Hoovering',
    when: [0, 1, 3],
    executions: [
      new Date('2020-05-17T20:06:02.097+02:00')
    ],
    id: 2
  }
];

@Injectable({
  providedIn: 'root'
})
export class TasksService {

  constructor(private notifs: NotificationsService) {
    this.loadTasks().then(tasks => this.tasks.next(Task.parseTasks(tasks)));
  }

  private tasks: BehaviorSubject<Task[]> = new BehaviorSubject([]);

  private localStorageKey = 'tasks';

  public getTasks(): Observable<Task[]> {
    return this.tasks;
  }

  public async getTaskById(id: number): Promise<Task> {
    return this.tasks.getValue().find(t => t.id === id);
  }

  public async deleteTask(task: Task) {
    const tasks = this.tasks.getValue();
    const index = tasks.indexOf(task);
    if (index < 0) { throw Error('Task does not exist'); }
    const removedTasks = tasks.splice(index, 1);
    if (removedTasks.length === 0) { throw Error('Cannot delete task'); }
    const removedTask = removedTasks[0];
    this.tasks.next([...tasks]);
    await this.persistTasksInDb();
    this.notifs.showUndoDeletedTask(this, removedTask);
  }

  public async createOrUpdateTask(task: Task) {
    const doesTaskExist = !!task.id && !!this.tasks.getValue().find((t: Task) => t.id === task.id);
    if (!doesTaskExist) {
      return await this.createTask(task);
    }
    return await this.updateTask(task);
  }

  public async createTask(task: Task) {
    const biggestId = this.tasks.getValue().reduce((acc: number, t: Task) => t.id > acc ? t.id : acc, 0);
    task.id = biggestId + 1;
    // TODO: should we copy or just push instead?
    this.tasks.next([...this.tasks.getValue(), task]);
    await this.persistTasksInDb();
    return task;
  }

  public async updateTask(task: Task) {
    this.tasks.next([...this.tasks.getValue().filter(t => t.id !== task.id), task]);
    await this.persistTasksInDb();
    return task;
  }

  public async markTaskDone(task: Task) {
    task.executions.push(new Date());
    task.computeProgress();
    await this.updateTask(task);
  }

  private async loadTasks() {
    // return await this.loadTasksFromDb() || [...defaultTasks];
    return [...defaultTasks];
  }

  private async persistTasksInDb() {
    localStorage.setItem(this.localStorageKey, JSON.stringify(this.tasks.getValue()));
  }

  private async loadTasksFromDb() {
    const fromDB = localStorage.getItem(this.localStorageKey);
    if (!fromDB) { return undefined; }
    const parsed = JSON.parse(fromDB) as Task[];
    parsed.forEach((task: Task) => {
      task.executions = task.executions.map(e => new Date(e))
    });
    return parsed;
  }
}