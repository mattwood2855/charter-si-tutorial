import { Component } from '@angular/core';
import { Subject } from 'rxjs';
import { AnimationLoading, LottieAction } from '../lottie/lottie.component';

@Component({
  selector: 'app-tutorial-page',
  templateUrl: './tutorial-page.component.html',
  styleUrls: ['./tutorial-page.component.scss'],
})
export class TutorialPageComponent {
  lottie = new AnimationLoading();
  lottieSubject = new Subject<LottieAction>();
}
