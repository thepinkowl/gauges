import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

export interface User {
  name: string;
  hasCompletedTutorial: boolean;
}

const localStorageKey = 'user';

const defaultUser: User = {
  name: 'You',
  hasCompletedTutorial: false,
};

@Injectable({
  providedIn: 'root',
})
export class UserService {
  public user: BehaviorSubject<User> = new BehaviorSubject({ ...defaultUser });

  constructor() {
    const user = localStorage.getItem(localStorageKey) || JSON.stringify(defaultUser);
    this.user = new BehaviorSubject(JSON.parse(user));
  }

  public getUser(): Observable<User> {
    return this.user;
  }

  public getUserName(): string {
    return this.user.getValue().name;
  }

  public setUserName(name: string) {
    this.user.next({ ...this.user.getValue(), name });
    this.persistUserInDb();
  }

  public setUserHasCompletedTutorial(done: boolean) {
    this.user.next({ ...this.user.getValue(), hasCompletedTutorial: !!done });
    this.persistUserInDb();
  }

  private persistUserInDb() {
    localStorage.setItem(localStorageKey, JSON.stringify(this.user.getValue()));
  }
}
