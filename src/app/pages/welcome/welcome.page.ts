import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.page.html',
  styleUrls: ['./welcome.page.scss'],
})
export class WelcomePage implements OnInit {

  constructor(
    private nav: NavController,
    private userService: UserService,
  ) { }

  ngOnInit() {
  }

  goToDashboard() {
    this.userService.setUserHasCompletedTutorial(true);
    this.nav.navigateRoot('/dashboard');
  }

}
