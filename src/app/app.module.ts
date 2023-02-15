import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TutorialPageComponent } from './tutorial-page/tutorial-page.component';
import { LottieComponent } from './lottie/lottie.component';
import { LottieModule } from 'ngx-lottie';
import player from 'lottie-web';
import { ToolbarComponent } from './toolbar/toolbar.component';
import { AngularKiteCoreModule } from '@kite/angular-kite';
import { TutorialListPageComponent } from './tutorial-list-page/tutorial-list-page.component';

export function playerFactory(): any {
  return player;
}

@NgModule({
  declarations: [
    AppComponent,
    TutorialPageComponent,
    LottieComponent,
    ToolbarComponent,
    TutorialListPageComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AngularKiteCoreModule,
    LottieModule.forRoot({ player: playerFactory }),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
