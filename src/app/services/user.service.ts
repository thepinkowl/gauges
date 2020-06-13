import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

export interface User {
  name: string;
}

const localStorageKey = 'user';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  public user: BehaviorSubject<User> = new BehaviorSubject({ name: 'You' });

  constructor() {
    const user = localStorage.getItem(localStorageKey) || '{"name": "You"}';
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

  private persistUserInDb() {
    localStorage.setItem(localStorageKey, JSON.stringify(this.user.getValue()));
  }
}
