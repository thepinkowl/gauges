import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

export interface User {
  name: string;
}

@Injectable({
  providedIn: 'root'
})
export class UserService {

  public user: BehaviorSubject<User> = new BehaviorSubject({ name: 'You' });

  constructor() { }

  public getUser(): Observable<User> {
    return this.user;
  }

  public getUserName(): string {
    return this.user.getValue().name;
  };

  public setUserName(name: string) {
    this.user.next({ ...this.user.getValue(), name });
  };
}
