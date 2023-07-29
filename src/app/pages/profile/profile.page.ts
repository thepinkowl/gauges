import { Component, OnInit } from '@angular/core';
import { AlertController, NavController } from '@ionic/angular';
import firebase from 'firebase';
import { GroupsService } from 'src/app/services/groups.service';
import { User, UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.page.html',
  styleUrls: ['./profile.page.scss'],
})
export class ProfilePage implements OnInit {
  user: User;
  username = ''
  private alert: HTMLIonAlertElement;

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

  modelChangeFn(value) {
    this.username = value;
    this.userService.setUserName(value);
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

  goBack() {
    if (window.history.length > 2) {
      this.nav.back();
    } else {
      this.nav.navigateBack('/');
    }
  }
}
