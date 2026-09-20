import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { DebugPage } from './debug.page';

const routes: Routes = [
  {
    path: '',
    component: DebugPage,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DebugPageRoutingModule {}
