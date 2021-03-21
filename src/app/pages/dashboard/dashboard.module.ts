import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { MomentModule } from 'ngx-moment';
import { GaugeComponent } from 'src/app/components/gauge/gauge.component';
import { MoodTitleComponent } from 'src/app/components/mood-title/mood-title.component';
import { TaskComponent } from 'src/app/components/task/task.component';
import { DashBoardPageRoutingModule } from './dashboard-routing.module';
import { DashBoardPage } from './dashboard.page';
import { SortTasksPipe } from './sort-tasks/sort-tasks.pipe';
import { HideHeaderDirective } from '../../directives/hide-header.directive';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DashBoardPageRoutingModule,
    MomentModule,
  ],
  declarations: [
    DashBoardPage,
    TaskComponent,
    GaugeComponent,
    MoodTitleComponent,
    SortTasksPipe,
    HideHeaderDirective,
  ]
})
export class DashBoardPageModule { }
