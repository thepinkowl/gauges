import { Component, OnInit } from '@angular/core';
import { AlertController, NavController } from '@ionic/angular';
import firebase from 'firebase';
import { GroupsService } from 'src/app/services/groups.service';
import { User, UserService } from 'src/app/services/user.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.page.html',
  styleUrls: ['./profile.page.scss'],
})
export class ProfilePage implements OnInit {
  user: User;
  username = ''
  version = environment.version;
  private alert: HTMLIonAlertElement;

  // 10 taps on the version line open the hidden debug page.
  private static readonly TAPS_TO_OPEN_DEBUG = 10;
  private static readonly TAP_TIMEOUT_MS = 2000;
  private versionTaps = 0;
  private versionTapTimer: any = null;

  constructor(
    private alertController: AlertController,
    private nav: NavController,
    public groupsService: GroupsService,
    public userService: UserService,
  ) {
    this.username = this.userService.getUserName();
  }
  ngOnInit(): void {
    this.userService.getUser().subscribe(u => this.user = u);
  }

  modelChangeFn(value: string) {
    this.username = value;

    // The box saves after a debounce of 500 ms. An empty box is a name that
    // the user is still typing, so do not save it. The old name stays until
    // the user types a new one.
    const name = (value || '').trim();
    if (!name) {
      return;
    }

    this.userService.setUserName(name);
  }

  // TODO show QR in popup
  showUserQR() {
    console.log(this.user.id);
  }

  async createGroup() {
    if (this.alert) {
      this.alert.dismiss();
    }
    this.alert = await this.alertController.create({
      header: 'Give your new group a name',
      inputs: [
        {
          name: 'name',
          type: 'text',
          id: 'name',
          value: '',
          placeholder: 'Group name',
        },
      ],
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel',
          cssClass: 'secondary',
        },
        {
          text: 'Ok',
          handler: ({ name }) => {
            this.groupsService.createGroup({ ...this.user, uid: this.user.id } as unknown as firebase.User, name)
          },
        },
      ],
    });
    this.alert.present();
  }

  leaveGroup(gid: string) {
    // this.groupsService.
    console.log(gid);
  }

  onVersionTap() {
    if (this.versionTapTimer) {
      clearTimeout(this.versionTapTimer);
    }

    this.versionTaps += 1;
    if (this.versionTaps >= ProfilePage.TAPS_TO_OPEN_DEBUG) {
      this.versionTaps = 0;
      this.versionTapTimer = null;
      this.nav.navigateForward('/debug');
      return;
    }

    // A slow tap does not count, so a normal user never reaches the page.
    this.versionTapTimer = setTimeout(() => {
      this.versionTaps = 0;
      this.versionTapTimer = null;
    }, ProfilePage.TAP_TIMEOUT_MS);
  }

  goBack() {
    if (window.history.length > 2) {
      this.nav.back();
    } else {
      this.nav.navigateBack('/');
    }
  }
}
