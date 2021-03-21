import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TaskListByCategoryPage } from './task-list-by-category.page';

const routes: Routes = [
  {
    path: '',
    component: TaskListByCategoryPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TaskListByCategoryPageRoutingModule {}
