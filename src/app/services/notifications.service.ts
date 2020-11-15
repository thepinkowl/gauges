import { Injectable } from '@angular/core';
import { ToastController } from '@ionic/angular';
import { TasksService } from './tasks.service';
import Task from '../models/Task';

@Injectable({
  providedIn: 'root'
})
export class NotificationsService {

  constructor(
    private toastController: ToastController
  ) { }

  async showToast(message: string, duration: number = 2000) {
    const toast = await this.toastController.create({
      message,
      duration
    });
    toast.present();
  }

  async showUndoDeletedTask(tasksService: TasksService, task: Task) {
    const toast = await this.toastController.create({
      message: `"${task.name}" has been removed.`,
      buttons: [
        {
          side: 'end',
          text: 'Undo',
          handler: () => !!tasksService.updateTask(task)
        }
      ],
      duration: 3000
    });
    toast.present();
  }
}
