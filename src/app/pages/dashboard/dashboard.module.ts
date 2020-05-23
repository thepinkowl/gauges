import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { GaugeComponent } from 'src/app/components/gauge/gauge.component';
import { TaskComponent } from 'src/app/components/task/task.component';
import { WeekDisplayComponent } from 'src/app/components/week-display/week-display.component';
import { DashBoardPageRoutingModule } from './dashboard-routing.module';
import { DashBoardPage } from './dashboard.page';
import { MoodTitleComponent } from 'src/app/components/mood-title/mood-title.component';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DashBoardPageRoutingModule
  ],
  declarations: [
    DashBoardPage,
    TaskComponent,
    WeekDisplayComponent,
    GaugeComponent,
    MoodTitleComponent
  ]
})
export class DashBoardPageModule { }
