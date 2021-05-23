import { Component, OnInit } from "@angular/core";
import { AlertController } from "@ionic/angular";
import { UserService, User } from "src/app/services/user.service";
import { Observable } from "rxjs";
import { TasksService } from "src/app/services/tasks.service";

@Component({
  selector: "app-mood-title",
  templateUrl: "./mood-title.component.html",
  styleUrls: ["./mood-title.component.scss"],
})
export class MoodTitleComponent implements OnInit {
  user: Observable<User>;
  private alert: HTMLIonAlertElement;

  messages = {
    green: [
      "all lights green, have a break",
      "you're doing well today!",
      "nothing new here, have a break",
      "all lights are green, bravo!",
      "you are the best!",
      // 'you rock'
    ],
    orange: [
      "a few things to do and you're done",
      "some chores are due today, take it easy",
      "you're almost done for today",
      "swipe it right!",
    ],
    red: [
      "swipe them right!",
      "did you forget something?",
      "it's time to do them!",
      "I know you can do it!",
      "let's get some work done today!",
    ],
  };

  message = "";

  constructor(
    private alertController: AlertController,
    private userService: UserService,
    private tasksService: TasksService
  ) {}

  ngOnInit() {
    this.user = this.userService.getUser();
    this.tasksService.getTasks().subscribe((tasks) => {
      if (!tasks || !tasks.length) {
        this.message = "start by creating a task!";
        return;
      }

      let messages;

      const shouldBeRed = tasks.some((t) => t.progress < 25);
      if (shouldBeRed) {
        messages = this.messages.red;
      } else {
        const shouldBeOrange = tasks.some((t) => t.progress < 50);
        if (shouldBeOrange) {
          messages = this.messages.orange;
        } else {
          messages = this.messages.green;
        }
      }

      this.message = messages[Math.floor(Math.random() * messages.length)];
    });
  }

  async setName() {
    if (!!this.alert) {
      this.alert.dismiss();
    }
    this.alert = await this.alertController.create({
      header: "How should I call you?",
      inputs: [
        {
          name: "name",
          type: "text",
          id: "name",
          value: this.userService.getUserName(),
          placeholder: "Name",
        },
      ],
      buttons: [
        {
          text: "Cancel",
          role: "cancel",
          cssClass: "secondary",
        },
        {
          text: "Ok",
          handler: ({ name }) => {
            this.userService.setUserName(name);
          },
        },
      ],
    });
    this.alert.present();
  }
}
