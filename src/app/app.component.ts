import { Component } from '@angular/core';
import { Subject } from 'rxjs';
import { AnimationLoading, LottieAction } from './lottie/lottie.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'charter-si-tutorial';
  lottie = new AnimationLoading();
  lottieSubject = new Subject<LottieAction>();
  constructor() {}

  ngOnInit() {}

  previous() {
    this.lottieSubject.next('BACK');
  }

  next() {
    this.lottieSubject.next('PLAY');
  }
}
