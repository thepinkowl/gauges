import { Injectable } from '@angular/core';
import {
  CanActivate,
  ActivatedRouteSnapshot,
  RouterStateSnapshot,
  UrlTree,
} from '@angular/router';
import { Observable } from 'rxjs';
import { User, UserService } from '../services/user.service';
import { NavController } from '@ionic/angular';

@Injectable({
  providedIn: 'root',
})
export class FirstTimeGuard implements CanActivate {
  constructor(private userService: UserService, private nav: NavController) {}

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ):
    | Observable<boolean | UrlTree>
    | Promise<boolean | UrlTree>
    | boolean
    | UrlTree {
    return new Promise((resolve) => {
      this.userService.getUser().subscribe((user: User) => {
        if (!user) {
          this.nav.navigateRoot('/loading');
          return resolve(false)
        }
        resolve(!user.hasCompletedTutorial);
        if (!user.hasCompletedTutorial) {
          resolve(true);
        } else {
          this.nav.navigateRoot('/dashboard');
        }
      });
    });
  }
}
