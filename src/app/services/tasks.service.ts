import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { firestore } from 'firebase/app';
import { BehaviorSubject, Observable } from 'rxjs';
import Task, { TaskInterface } from '../models/Task';
import { NotificationsService } from './notifications.service';

const todayInMs = Date.now();
const dayInMs = 1000 * 60 * 60 * 24;
const defaultTasks: TaskInterface[] = [
  {
    name: 'Laundry',
    repeat: 7,
    executions: [
      new Date(todayInMs - 1 * dayInMs),
      new Date(todayInMs - 10 * dayInMs),
    ],
    id: '0',
    gid: '0',
  },
  {
    name: 'Hoovering',
    repeat: 1,
    executions: [new Date(todayInMs - 10 * dayInMs)],
    id: '2',
    gid: '2',
  },
  {
    name: 'Gardening',
    repeat: 14,
    executions: [new Date(todayInMs - 4 * dayInMs)],
    id: '1',
    gid: '1',
  },
];

@Injectable({
  providedIn: 'root',
})
export class TasksService {
  constructor(
    private notifs: NotificationsService,
    private firestore: AngularFirestore
  ) {
  }

  public task$: BehaviorSubject<any[]> = new BehaviorSubject([]);

  public getTasks(): Observable<Task[]> {
    return this.task$;
  }

  public fetchAndRegisterTasksFromGroups(groups: {gid:string}[]) {
    const groupsToTasksMapper = {}

    groups.forEach(group => {
      console.log("group", group);
      const gid = group.gid;

      // GET AND REGISTER TASKS
      groupsToTasksMapper[gid] = new BehaviorSubject([]);
      const gauges = this.firestore.collection(`groups/${gid}/gauges`).valueChanges({idField: 'id'});
      gauges.subscribe(tasks => {
        console.log(tasks);
        groupsToTasksMapper[gid].next(tasks.map((task: Task) => ({ ...task, gid })))
      })

      // If any of the groups changes, we update the task$ pool;
      groupsToTasksMapper[gid].subscribe(test => {
        const values = Object.keys(groupsToTasksMapper).filter(id => id !== gid).map(id => (groupsToTasksMapper[id].value));
        this.task$.next([...values.reduce((acc, val) => acc.concat(val), []), ...test])
      })
    })
  }

  public async getTaskById(id: string): Promise<Task> {
    return this.task$.getValue().find((t) => t.id === id);
  }

  public async deleteTask(task: Task) {
    this.firestore.doc(`groups/${task.gid}/gauges/${task.id}`).delete();
    this.notifs.showUndoDeletedTask(this, task);
  }

  // public async createOrUpdateTask(task: Task) {
  //   const doesTaskExist =
  //     !!task.id && !!this.tasks.getValue().find((t: Task) => t.id === task.id);
  //   if (!doesTaskExist) {
  //     return await this.createTask(task);
  //   }
  //   return await this.updateTask(task);
  // }

  public async createTask(task: Task) {
    this.firestore.collection(`groups/${task.gid}/gauges`).add({
      name: task.name
    });
  }

  public async updateTask(task: Task) {
    const gid = task.gid;
    const id = task.id;
    delete task.gid;
    delete task.id;
    this.firestore.collection(`groups/${gid}/gauges`).doc(id).update(task);
    return task;
  }

  public async markTaskDone(task: Task) {
    this.firestore.collection(`groups/${task.gid}/gauges`).doc(task.id).update({
        executions: firestore.FieldValue.arrayUnion(firestore.Timestamp.fromDate(new Date()))
    });
  }
}
