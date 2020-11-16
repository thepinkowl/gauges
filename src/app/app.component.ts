import { Component } from '@angular/core';

import { Platform, NavController } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

import { UserService } from './services/user.service';

import { AngularFireAuth } from '@angular/fire/auth';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private userService: UserService,
    private nav: NavController,
    private fireauth: AngularFireAuth,
    private statusBar: StatusBar,
  ) {
    this.fireauth.user.subscribe(user => {
      if (!user) {
        this.fireauth.signInAnonymously();
      } else {
        this.userService.startWithFirebaseUser(user);
      }
    });

    this.userService.getUser().subscribe((user) => {
      if (!user) return;
      if (!user.hasCompletedTutorial) {
        this.nav.navigateRoot('/welcome');
      } else {
        this.nav.navigateRoot('/');
      }
    });
    this.initializeApp();
  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }
}
