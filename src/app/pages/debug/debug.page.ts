import { Component, OnDestroy, OnInit } from '@angular/core';
import { NavController, Platform } from '@ionic/angular';
import { AngularFireAuth } from '@angular/fire/auth';
import { Subscription } from 'rxjs';

import { environment } from 'src/environments/environment';
import { Group, User, UserService } from 'src/app/services/user.service';
import { GroupsService } from 'src/app/services/groups.service';
import { TasksService } from 'src/app/services/tasks.service';
import { CategoriesService } from 'src/app/services/categories.service';

export interface SafeAreaInsets {
  top: string;
  right: string;
  bottom: string;
  left: string;
}

@Component({
  selector: 'app-debug',
  templateUrl: './debug.page.html',
  styleUrls: ['./debug.page.scss'],
})
export class DebugPage implements OnInit, OnDestroy {
  user: User = null;
  authUid = '-';
  authIsAnonymous = '-';
  groups: Group[] = [];
  taskCount = 0;
  categoryCount = 0;

  version = environment.version;
  production = environment.production;
  projectId = environment.firebase.projectId;
  platforms = '';
  userAgent = window.navigator.userAgent;
  insets: SafeAreaInsets = { top: '-', right: '-', bottom: '-', left: '-' };

  copyState = '';

  private subscriptions = new Subscription();

  constructor(
    private nav: NavController,
    private platform: Platform,
    private fireauth: AngularFireAuth,
    private userService: UserService,
    private groupsService: GroupsService,
    private tasksService: TasksService,
    private categoriesService: CategoriesService
  ) {}

  ngOnInit(): void {
    this.platforms = this.platform.platforms().join(', ');
    this.insets = this.measureSafeAreaInsets();

    this.subscriptions.add(
      this.userService.getUser().subscribe((user) => (this.user = user))
    );
    this.subscriptions.add(
      this.fireauth.user.subscribe((u) => {
        this.authUid = u ? u.uid : '-';
        this.authIsAnonymous = u ? String(u.isAnonymous) : '-';
      })
    );
    this.subscriptions.add(
      this.groupsService.groups.subscribe((groups) => (this.groups = groups))
    );
    this.subscriptions.add(
      this.tasksService.getTasks().subscribe((tasks) => (this.taskCount = tasks.length))
    );
    this.subscriptions.add(
      this.categoriesService
        .getCategories()
        .subscribe((categories) => (this.categoryCount = categories.length))
    );
  }

  ngOnDestroy(): void {
    this.subscriptions.unsubscribe();
  }

  /**
   * A custom property can hold an unresolved var() or env() token, so read the
   * insets back from a probe element that the browser has already laid out.
   */
  private measureSafeAreaInsets(): SafeAreaInsets {
    const probe = document.createElement('div');
    probe.style.cssText = [
      'position: fixed',
      'top: 0',
      'left: 0',
      'width: 0',
      'height: 0',
      'visibility: hidden',
      'padding-top: var(--ion-safe-area-top, 0px)',
      'padding-right: var(--ion-safe-area-right, 0px)',
      'padding-bottom: var(--ion-safe-area-bottom, 0px)',
      'padding-left: var(--ion-safe-area-left, 0px)',
    ].join(';');

    document.body.appendChild(probe);
    const style = window.getComputedStyle(probe);
    const insets = {
      top: style.paddingTop,
      right: style.paddingRight,
      bottom: style.paddingBottom,
      left: style.paddingLeft,
    };
    document.body.removeChild(probe);

    return insets;
  }

  async copyReport() {
    const report = JSON.stringify(
      {
        version: this.version,
        production: this.production,
        projectId: this.projectId,
        userId: this.user ? this.user.id : null,
        userName: this.user ? this.user.name : null,
        hasCompletedTutorial: this.user ? !!this.user.hasCompletedTutorial : null,
        authUid: this.authUid,
        authIsAnonymous: this.authIsAnonymous,
        groups: this.groups.map((g) => ({ gid: g.gid, name: g.name })),
        taskCount: this.taskCount,
        categoryCount: this.categoryCount,
        platforms: this.platforms,
        safeAreaInsets: this.insets,
        userAgent: this.userAgent,
      },
      null,
      2
    );

    try {
      await window.navigator.clipboard.writeText(report);
      this.copyState = 'Copied';
    } catch (e) {
      console.log(report);
      this.copyState = 'Clipboard blocked, see the console';
    }
  }

  goBack() {
    if (window.history.length > 2) {
      this.nav.back();
    } else {
      this.nav.navigateBack('/profile');
    }
  }
}
