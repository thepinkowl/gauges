import { Injectable } from "@angular/core";
import { AngularFirestore } from "@angular/fire/firestore";
import firebase from "firebase/app";
import { BehaviorSubject, Observable } from "rxjs";
import Task from "../models/Task";
import { Category } from "./categories.service";
import { NotificationsService } from "./notifications.service";

@Injectable({
  providedIn: "root",
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

  public fetchAndRegisterTasksFromGroups(groups: { gid: string }[]) {
    const groupsToTasksMapper = {};

    groups.forEach((group) => {
      const gid = group.gid;

      // GET AND REGISTER TASKS
      groupsToTasksMapper[gid] = new BehaviorSubject([]);
      const gauges = this.firestore
        .collection(`groups/${gid}/gauges`)
        .valueChanges({ idField: "id" });

      gauges.subscribe((tasks) => {
        const tasksObjects = tasks.map(
          (task: any) =>
            new Task({
              ...task,
              gid,
              executions: task.executions.map(
                (e: firebase.firestore.Timestamp) => e.toDate()
              ),
            })
        );

        groupsToTasksMapper[gid].next(tasksObjects);
      });

      // If any of the groups changes, we update the task$ pool;
      groupsToTasksMapper[gid].subscribe((tasksInGroup) => {
        const tasksInOtherGroups = Object.keys(groupsToTasksMapper)
          .filter((id) => id !== gid)
          .map((id) => groupsToTasksMapper[id].value);

        this.task$.next([
          ...tasksInOtherGroups.reduce((acc, val) => acc.concat(val), []),
          ...tasksInGroup,
        ]);
      });
    });
  }

  public async getTaskById(id: string): Promise<Task> {
    return this.task$.getValue().find((t) => t.id === id);
  }

  public getTasksInCategory(category: Category): Task[] {
    const searchCategory = category.cid === "other.other" ? "" : category.cid;
    return this.task$.getValue().filter((t) => t.category === searchCategory);
  }

  public async deleteTask(task: Task) {
    this.firestore.doc(`groups/${task.gid}/gauges/${task.id}`).delete();
    this.notifs.showUndoDeletedTask(this, task);
  }

  private static taskToFirestore(task: Task) {
    const t = { ...task };
    delete t.id;
    delete t.gid;
    delete t.lastDone;
    delete t.progress;
    return t;
  }

  public async createTask(task: Task) {
    this.firestore
      .collection(`groups/${task.gid}/gauges`)
      .add(TasksService.taskToFirestore(task));
  }

  public async updateTask(task: Task) {
    this.firestore
      .collection(`groups/${task.gid}/gauges`)
      .doc(task.id)
      .update(TasksService.taskToFirestore(task));
    return task;
  }

  public async markTaskDone(task: Task) {
    this.firestore
      .collection(`groups/${task.gid}/gauges`)
      .doc(task.id)
      .update({
        executions: firebase.firestore.FieldValue.arrayUnion(
          firebase.firestore.Timestamp.fromDate(new Date())
        ),
      });
  }
}
