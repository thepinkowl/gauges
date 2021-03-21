import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { TaskListByCategoryPageRoutingModule } from './task-list-by-category-routing.module';
import { TaskListByCategoryPage } from './task-list-by-category.page';
import { TaskListComponentModule } from 'src/app/components/task-list/task-list.module';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TaskListByCategoryPageRoutingModule,
    TaskListComponentModule,
  ],
  declarations: [TaskListByCategoryPage]
})
export class TaskListByCategoryPageModule {}
