import { Component, OnInit } from '@angular/core';
import { Subject } from 'rxjs';
import {
  AnimationLoading,
  ICharterLottie,
  LottieAction,
} from '../lottie/lottie.component';
import {
  AnimationData,
  CharterAnimationSegment,
  EquipmentType,
  SelfInstallTutorialServiceService,
  TutorialData,
} from '../services/self-install-tutorial-service.service';
import { ActivatedRoute, Router } from '@angular/router';
import { AnimationSegment } from 'lottie-web';

@Component({
  selector: 'app-tutorial-page',
  templateUrl: './tutorial-page.component.html',
  styleUrls: ['./tutorial-page.component.scss'],
  providers: [SelfInstallTutorialServiceService],
})
export class TutorialPageComponent implements OnInit {
  animationData = null;
  currentSegment = 0;
  lottie = new AnimationLoading();
  lottieSubject = new Subject<LottieAction>();
  title = '';
  body = '';
  equipmentTypeString = '';
  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private service: SelfInstallTutorialServiceService
  ) {}

  ngOnInit(): void {
    this.equipmentTypeString =
      this.route.snapshot.paramMap.get('equipmentType');
    switch (this.equipmentTypeString) {
      case 'modem':
        this.animationData = this.service.getAnimationFor(EquipmentType.Modem);
        break;
      case 'router':
        this.animationData = this.service.getAnimationFor(EquipmentType.Router);
        break;
      case 'stb':
        this.animationData = this.service.getAnimationFor(EquipmentType.Stb);
        break;
    }
    this.lottie = new TutorialAnimation(this.animationData);
    this.title = this.animationData.segments[this.currentSegment].title;
    this.body = this.animationData.segments[this.currentSegment].body;
  }

  back(): void {
    if (this.currentSegment > 0) {
      this.currentSegment--;

      this.title = this.animationData.segments[this.currentSegment].title;
      this.body = this.animationData.segments[this.currentSegment].body;
    }
    else
      this.router.navigateByUrl('..');
  }

  next(): void {
    if (this.currentSegment < this.animationData.segments.length - 1) {
      this.currentSegment++;

      this.title = this.animationData.segments[this.currentSegment].title;
      this.body = this.animationData.segments[this.currentSegment].body;
    }
  }
}

export class TutorialAnimation implements ICharterLottie {
  source = '';
  segments: AnimationSegment[] = [];

  constructor(animationData: AnimationData) {
    this.source = animationData.animation;
    animationData.segments.forEach((segment) => {
      console.log(this);
      this.segments.push([segment.startFrameIndex, segment.endFrameIndex]);
    });
  }
}
