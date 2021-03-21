import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';

import { MoodTitleComponent } from 'src/app/components/mood-title/mood-title.component';
import { DashBoardPageRoutingModule } from './dashboard-routing.module';
import { DashBoardPage } from './dashboard.page';
import { HideHeaderDirective } from '../../directives/hide-header.directive';
import { TaskListComponentModule } from 'src/app/components/task-list/task-list.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DashBoardPageRoutingModule,
    TaskListComponentModule,
  ],
  declarations: [
    DashBoardPage,
    MoodTitleComponent,
    HideHeaderDirective,
  ]
})
export class DashBoardPageModule { }
