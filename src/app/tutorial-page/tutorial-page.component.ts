import { Component, OnInit } from '@angular/core';
import { Subject } from 'rxjs';
import {
  AnimationLoading,
  ICharterLottie,
  LottieAction,
} from '../lottie/lottie.component';
import {
  EquipmentType,
  SelfInstallTutorialServiceService,
} from '../services/self-install-tutorial-service.service';
import { ActivatedRoute } from '@angular/router';
import { AnimationSegment } from 'lottie-web';

@Component({
  selector: 'app-tutorial-page',
  templateUrl: './tutorial-page.component.html',
  styleUrls: ['./tutorial-page.component.scss'],
  providers: [SelfInstallTutorialServiceService],
})
export class TutorialPageComponent implements OnInit {
  lottie = new AnimationLoading();
  lottieSubject = new Subject<LottieAction>();
  title = '';
  body = '';
  equipment = {};
  constructor(
    private route: ActivatedRoute,
    private service: SelfInstallTutorialServiceService
  ) {}

  ngOnInit(): void {
    this.equipment = this.route.snapshot.paramMap.get('equipmentType');
    var animationData = this.service.getAnimationFor(EquipmentType.Modem);
    this.lottie = new TutorialAnimation(animationData.animation);
    this.title = animationData.segments[0].title;
    this.body = animationData.segments[0].body;
  }
}

export class TutorialAnimation implements ICharterLottie {
  source = '';
  segments: AnimationSegment[] = [
    [0, 100],
    [100, 200],
    [200, 294],
  ];

  constructor(animationFile: string) {
    this.source = animationFile;
    console.log(animationFile);
  }
}
