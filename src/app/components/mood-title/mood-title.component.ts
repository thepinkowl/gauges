import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';
import { UserService, User } from 'src/app/services/user.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-mood-title',
  templateUrl: './mood-title.component.html',
  styleUrls: ['./mood-title.component.scss'],
})
export class MoodTitleComponent implements OnInit {

  user: Observable<User>;
  private alert: HTMLIonAlertElement;

  constructor(private alertController: AlertController, private userService: UserService) { }

  ngOnInit() {
    this.user = this.userService.getUser();
  }

  async setName() {
    if(!!this.alert) this.alert.dismiss();
    this.alert = await this.alertController.create({
      header: 'How should I call you?',
      inputs: [
        {
          name: 'name',
          type: 'text',
          id: 'name',
          value: this.userService.getUserName(),
          placeholder: 'Name'
        }
      ],
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel',
          cssClass: 'secondary'
        },
        {
          text: 'Ok',
          handler: ({ name }) => {
            this.userService.setUserName(name);
          }
        }
      ]
    });
    this.alert.present();
  }

}
