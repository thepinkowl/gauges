import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { FirstTimeGuard } from './guards/first-time.guard';
import { HasCompletedTutorialGuard } from './guards/has-completed-tutorial.guard';

const routes: Routes = [
  {
    path: 'dashboard',
    loadChildren: () =>
      import('./pages/dashboard/dashboard.module').then(
        (m) => m.DashBoardPageModule
      ),
    canActivate: [HasCompletedTutorialGuard],
  },
  {
    path: 'task/:id',
    loadChildren: () =>
      import('./pages/task-detail/task-detail.module').then(
        (m) => m.TaskDetailPageModule
      ),
    canActivate: [HasCompletedTutorialGuard],
  },
  {
    path: '',
    redirectTo: 'dashboard',
    pathMatch: 'full',
  },
  {
    path: 'welcome',
    loadChildren: () =>
      import('./pages/welcome/welcome.module').then((m) => m.WelcomePageModule),
    canActivate: [FirstTimeGuard],
  },
  {
    path: 'loading',
    loadChildren: () =>
      import('./pages/loading/loading.module').then((m) => m.LoadingPageModule),
  },
  {
    path: 'category/:cid',
    loadChildren: () =>
      import('./pages/task-list-by-category/task-list-by-category.module').then(
        (m) => m.TaskListByCategoryPageModule
      ),
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule { }
