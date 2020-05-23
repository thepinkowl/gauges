import { Injectable } from '@angular/core';

export interface Task {
  id: number;
  title: string;
  when: number[];
  executions: Date[];
}

const defaultTasks: Task[] = [
  {
    title: 'Laundry',
    when: [1, 3],
    executions: [
      new Date("2020-05-14T20:06:02.097+02:00"),
      new Date("2020-05-13T20:06:02.097+02:00")
    ],
    id: 0
  },
  {
    title: 'Gardening',
    when: [0, 1, 2],
    executions: [
      new Date("2020-05-16T20:06:02.097+02:00")
    ],
    id: 1
  },
  {
    title: 'Hoovering',
    when: [0, 1, 3],
    executions: [
      new Date("2020-05-17T20:06:02.097+02:00")
    ],
    id: 2
  }
];

@Injectable({
  providedIn: 'root'
})
export class TasksService {

  private tasks: Task[] = [];

  constructor() {
    this.loadTasks().then(tasks => this.tasks = tasks);
  }

  public async getTasks(): Promise<Task[]> {
    return this.tasks;
  }

  public async getTaskById(id: number): Promise<Task> {
    return this.tasks.find(t => t.id === id);
  }

  public async deleteTask(task: Task) {
    this.tasks = [...this.tasks.filter(t => t.id !== task.id)];
    await this.persistTasksInDb();
  }

  public async createOrUpdateTask(task: Task) {
    const doesTaskExist = !!task.id && !!this.tasks.find((t: Task) => t.id === task.id);
    if (!doesTaskExist) {
      return await this.createTask(task);
    }
    return await this.updateTask(task);
  }

  public async createTask(task: Task) {
    const biggestId = this.tasks.reduce((acc: number, t: Task) => t.id > acc ? t.id : acc, 0);
    task.id = biggestId + 1;
    // TODO: should we copy or just push instead?
    this.tasks = [...this.tasks, task];
    await this.persistTasksInDb();
    return task;
  }

  public async updateTask(task: Task) {
    this.tasks = [...this.tasks.filter(t => t.id !== task.id), task];
    await this.persistTasksInDb();
    return task;
  }

  private localStorageKey = 'tasks';

  private async loadTasks() {
    return await this.loadTasksFromDb() || [...defaultTasks];
  }

  private async persistTasksInDb() {
    localStorage.setItem(this.localStorageKey, JSON.stringify(this.tasks));
  }

  private async loadTasksFromDb() {
    const fromDB = localStorage.getItem(this.localStorageKey);
    if (!fromDB) return undefined;
    const parsed = JSON.parse(fromDB);
    parsed.forEach((task: Task) => {
      task.executions = task.executions.map(e => new Date(e))
    });
    return parsed;
  }
}
