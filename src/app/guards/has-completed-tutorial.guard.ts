import { Injectable } from '@angular/core';
import {
  CanActivate,
  ActivatedRouteSnapshot,
  RouterStateSnapshot,
  UrlTree,
} from '@angular/router';
import { Observable } from 'rxjs';
import { UserService, User } from '../services/user.service';
import { NavController } from '@ionic/angular';

@Injectable({
  providedIn: 'root',
})
export class HasCompletedTutorialGuard implements CanActivate {
  constructor(private userService: UserService, private nav: NavController) { }
  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ):
    | Observable<boolean | UrlTree>
    | Promise<boolean | UrlTree>
    | boolean
    | UrlTree {
    return new Promise((resolve, reject) => {
      this.userService.getUser().subscribe((user: User) => {
        if (!user) {
          reject();
        } else if (!!user.hasCompletedTutorial) {
          resolve(true);
        } else {
          this.nav.navigateRoot('/welcome');
        }
      });
    });
  }
}
