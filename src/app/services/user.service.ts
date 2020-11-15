import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { AngularFirestore, AngularFirestoreDocument } from '@angular/fire/firestore';
import { TasksService } from './tasks.service';

export interface User {
  name?: string;
  hasCompletedTutorial?: boolean;
  empty?: boolean;
}

export interface EmptyUser {
  empty: boolean;
}

export interface Group {
  gid: string;
  name?: string;
  members?: string[];
}

@Injectable({
  providedIn: 'root',
})
export class UserService {
  public user: BehaviorSubject<User> = new BehaviorSubject({ empty: true });
  public userRef: AngularFirestoreDocument<User>;
  public groups: BehaviorSubject<Group[]> = new BehaviorSubject([]);

  public task$: BehaviorSubject<any[]> = new BehaviorSubject([]);

  constructor(
    private firestore: AngularFirestore,
    private tasksService: TasksService,
  ) { }

  public getUser(): Observable<User> {
    return this.user;
  }

  loadUser(u) {
    this.userRef = this.firestore.doc(`users/${u.uid}`);
    this.userRef
      .valueChanges()
      .subscribe((user: User) => {
        console.log("user", user);
        const { name } = user
        this.user.next({
          ...user,
          name: u.displayName || name || "You",
        })
      });
  }

  loadGroupsOfUser(u) {
    const group$ = this.firestore.collection(`users/${u.uid}/groups`).valueChanges({ idField: 'gid' });

    group$.subscribe(groups => {

      // TODO: move to groups Service
      groups.forEach(group => {
        console.log("group", group);
        const gid = group.gid

        // GET INFO
        this.firestore.doc(`groups/${gid}`).get().subscribe(doc => {
          const groupData: Group = { ...doc.data(), gid }
          console.log(groupData);
          this.groups.next([
            ...this.groups.value.filter(g => g.gid !== gid),
            groupData
          ])
        });
      })

      this.tasksService.fetchAndRegisterTasksFromGroups(groups);
    })
  }

  public startWithFirebaseUser(u) {
    if (!u || !u.uid) return;

    this.loadUser(u);
    this.loadGroupsOfUser(u);
  }

  public getUserName(): string {
    return this.user.getValue().name;
  }

  public getGroups(): string[] {
    return Object.keys(this.groups.getValue());
  }

  public setUserName(name: string) {
    this.userRef.update({ name });
  }

  public setUserHasCompletedTutorial() {
    this.userRef.update({ hasCompletedTutorial: true });
  }
}
