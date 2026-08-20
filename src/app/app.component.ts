import { Component } from '@angular/core';

import { Platform, NavController } from '@ionic/angular';
import { Capacitor } from '@capacitor/core';
import { SplashScreen } from '@capacitor/splash-screen';
import { StatusBar, Style } from '@capacitor/status-bar';

import { UserService } from './services/user.service';

import { AngularFireAuth } from '@angular/fire/auth';

type LoadStatus = 'uninit' | 'init';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  status: LoadStatus = 'uninit'

  constructor(
    private platform: Platform,
    private userService: UserService,
    private nav: NavController,
    private fireauth: AngularFireAuth,
  ) {
    this.fireauth.user.subscribe(user => {
      if (!user) {
        this.fireauth.signInAnonymously();
      } else {
        console.log('user', user.uid);
        this.userService.startWithFirebaseUser(user);
      }
    });

    this.userService.getUser().subscribe((user) => {
      if (this.status === 'uninit') {
        if (!!user) {
          if (!user.hasCompletedTutorial) {
            this.nav.navigateRoot('/welcome');
          } else {
            this.nav.navigateRoot('/');
          }
          this.initializeApp();
        }
      }
    });
  }

  initializeApp() {
    this.platform.ready().then(() => {
      // StatusBar has no web implementation, so it would throw in the browser
      if (Capacitor.isNativePlatform()) {
        StatusBar.setStyle({ style: Style.Default });
      }
      SplashScreen.hide();
      this.status = 'init'
    });
  }
}
