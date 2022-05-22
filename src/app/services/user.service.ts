import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import {
  AngularFirestore,
  AngularFirestoreDocument,
} from '@angular/fire/firestore';
import { TasksService } from './tasks.service';
import { GroupsService } from './groups.service';
import { CategoriesService } from './categories.service';

export interface User {
  id: string;
  name: string;
  hasCompletedTutorial?: boolean;
}

export interface FirebaseUserDoc {
  name: string;
  hasCompletedTutorial?: boolean;
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
  public user: BehaviorSubject<User> = new BehaviorSubject(null);
  public userRef: AngularFirestoreDocument<FirebaseUserDoc>;
  public groups: BehaviorSubject<Group[]> = new BehaviorSubject([]);

  public task$: BehaviorSubject<any[]> = new BehaviorSubject([]);

  constructor(
    private firestore: AngularFirestore,
    private groupsService: GroupsService,
    private categoriesService: CategoriesService,
    private tasksService: TasksService
  ) { }

  public getUser(): Observable<User> {
    return this.user;
  }

  loadUser(u) {
    const parseUserDisplayName = (name: string) => (name || 'You').split(' ')[0].replace(/\+/g, ' ');

    this.userRef = this.firestore.doc<FirebaseUserDoc>(`users/${u.uid}`);
    this.userRef
      .valueChanges()
      .subscribe((user) => {
        if (!user) {
          this.userRef.set({ name: parseUserDisplayName(u.displayName) });
          this.groupsService.createGroup(u, 'My tasks');
          return;
        }
        this.user.next({ ...user, id: u.uid });
      });
  }

  loadGroupsOfUser(u) {
    this.firestore
      .collection(`users/${u.uid}/groups`)
      .valueChanges({ idField: 'gid' })
      .subscribe((groups) => {
        this.groupsService.fetchAndRegisterGroups(groups);
        this.tasksService.fetchAndRegisterTasksFromGroups(groups);
      });
  }

  public startWithFirebaseUser(u) {
    if (!u || !u.uid) { return; }

    this.loadUser(u);
    this.loadGroupsOfUser(u);
    this.categoriesService.loadCategories();
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
