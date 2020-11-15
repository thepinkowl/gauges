import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TaskDetailPageRoutingModule } from './task-detail-routing.module';

import { TaskDetailPage } from './task-detail.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TaskDetailPageRoutingModule
  ],
  declarations: [TaskDetailPage]
})
export class TaskDetailPageModule { }
