import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';
import { MomentModule } from 'ngx-moment';
import { TaskListComponent } from './task-list.component';
import { SortTasksPipe } from '../../pipes/sort-tasks/sort-tasks.pipe';
import { TaskComponent } from '../task/task.component';
import { GaugeComponent } from 'src/app/components/gauge/gauge.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    MomentModule,
    RouterModule,
    IonicModule,
  ],
  declarations: [
    TaskComponent,
    TaskListComponent,
    SortTasksPipe,
    GaugeComponent,
  ],
  exports: [TaskListComponent, GaugeComponent]
})
export class TaskListComponentModule { }
