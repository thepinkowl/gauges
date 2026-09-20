import { Injectable } from '@angular/core';
import { CanActivate } from '@angular/router';
import { Observable } from 'rxjs';
import { filter, map, take } from 'rxjs/operators';
import { User, UserService } from '../services/user.service';
import { NavController } from '@ionic/angular';

@Injectable({
  providedIn: 'root',
})
export class HasCompletedTutorialGuard implements CanActivate {
  constructor(private userService: UserService, private nav: NavController) { }

  canActivate(): Observable<boolean> {
    // getUser() is a long lived subject. Take the first real user and then
    // complete, because a guard that stays subscribed navigates again on
    // every later change of the user document.
    return this.userService.getUser().pipe(
      filter((user: User) => !!user),
      take(1),
      map((user: User) => {
        if (user.hasCompletedTutorial) {
          return true;
        }

        this.nav.navigateRoot('/welcome');
        return false;
      })
    );
  }
}
