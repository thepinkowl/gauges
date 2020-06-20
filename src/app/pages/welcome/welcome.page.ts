import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.page.html',
  styleUrls: ['./welcome.page.scss'],
})
export class WelcomePage implements OnInit {
  lottieConfig: object;

  constructor(private nav: NavController, private userService: UserService) {
    this.lottieConfig = {
      path: 'assets/check.json',
      renderer: 'canvas',
      autoplay: true,
      loop: false,
    };
  }

  ngOnInit() {
    console.log('init');
  }

  createNewTask() {
    this.userService.setUserHasCompletedTutorial(true);
    this.nav.navigateRoot('/dashboard');
    this.nav.navigateForward('/task/new');
  }
}
