import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { LottieModule } from 'ngx-lottie';
import player from 'lottie-web';

import { LoadingPageRoutingModule } from './loading-routing.module';

import { LoadingPage } from './loading.page';

export function playerFactory() {
  return player;
}

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    LoadingPageRoutingModule,
    LottieModule.forRoot({ player: playerFactory }),
  ],
  declarations: [LoadingPage],
})
export class LoadingPageModule {}
