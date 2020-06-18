import { Component, OnInit } from '@angular/core';
import { NavController, AlertController } from '@ionic/angular';

import { Plugins } from '@capacitor/core';


@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  showAppleSignIn = false;

  constructor(
    private nav: NavController,
    private alertController: AlertController,
  ) {}

  async ngOnInit() {
    const { Device } = Plugins;
    // Only show the Apple sign in button on iOS

    const device = await Device.getInfo();
    this.showAppleSignIn = device.platform === 'ios';
  }

  openAppleSignIn() {
    const { SignInWithApple } = Plugins;
    SignInWithApple.Authorize()
      .then(async (res) => {
        if (res.response && res.response.identityToken) {
          // this.user = res.response;
          console.log(res.response);
        } else {
          console.error(res);
          this.presentAlert();
        }
      })
      .catch((response) => {
        console.error(response);
        this.presentAlert();
      });
  }

  goBack() {
    if (window.history.length > 2) {
      this.nav.back();
    } else {
      this.nav.navigateBack('/');
    }
  }

  async presentAlert() {
    const alert = await this.alertController.create({
      header: 'Login Failed',
      message: 'Please try again later',
      buttons: ['OK'],
    });
    await alert.present();
  }
}
