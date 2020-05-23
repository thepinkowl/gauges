import { Injectable } from '@angular/core';

export interface User {
  name: string;
}

@Injectable({
  providedIn: 'root'
})
export class UserService {

  public user: User = { name: "You" };

  constructor() { }

  public getUserName() {
    return this.user.name;
  };

  public setUserName(name: string) {
    this.user.name = name;
  };
}
