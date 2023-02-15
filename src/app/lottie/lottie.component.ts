import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { AnimationItem, AnimationSegment } from 'lottie-web';
import { AnimationOptions } from 'ngx-lottie';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-lottie',
  templateUrl: './lottie.component.html',
  styleUrls: ['./lottie.component.scss'],
})
export class LottieComponent implements OnInit {
  @Input() autoPlay: boolean = true;
  @Input() loop: boolean = false; // replay animation after end
  @Input() lottie: ICharterLottie;
  @Input() parentSubject: Subject<LottieAction>;
  @Input() playAllSegments: boolean = false;

  // Only enabled for playAllSegments
  @Input() interSegmentDuration: number = 0;
  @Input() height: string;
  @Input() width: string;

  @Output() lottiePaused = new EventEmitter<null>();
  @Output() lottieStopped = new EventEmitter<null>();

  private animationIndex = -1;
  private animationItem: AnimationItem;
  private endFrame: number = 0;
  private startFrame: number = 0;

  options: AnimationOptions = {
    loop: false,
    autoplay: false,
  };

  constructor() {}

  ngOnInit() {
    this.parentSubject?.subscribe((lottieAction) => {
      console.log('Lottie Action', lottieAction);

      switch (lottieAction) {
        case 'PLAY':
          this.play();
          break;
        case 'BACK':
          this.previous();
          break;
        case 'PAUSE':
          this.pause();
          break;
        case 'STOP':
          this.stop();
          break;
      }
    });

    this.options = {
      ...this.options,
      path: this.lottie.source,
      loop: this.loop,
    };

    if (this.lottie) {
      if (this.lottie.segments) {
        let segmentsCount = this.lottie.segments.length;

        if (!this.playAllSegments) this.playAllSegments = segmentsCount === 1;

        if (segmentsCount > 0) {
          this.startFrame = this.lottie.segments[0][0];
          this.endFrame = this.lottie.segments[segmentsCount - 1][1];
        }
      }
    }
  }

  animationCreated(animationItem: AnimationItem) {
    this.animationItem = animationItem;
    console.log(animationItem);

    if (this.autoPlay) {
      new Promise((r) =>
        setTimeout(() => {
          this.play();
        }, 100)
      );
    }
  }

  complete(completeEvent) {
    this.lottiePaused.emit();
  }

  previous() {
    if (this.animationIndex === 0) return;

    this.animationIndex--;
    this.animationItem.playSegments(
      this.lottie.segments[this.animationIndex],
      true
    );
  }

  next() {
    if (this.animationIndex >= this.lottie.segments.length - 1) return;

    this.animationIndex++;
    this.animationItem.playSegments(
      this.lottie.segments[this.animationIndex],
      true
    );

    console.log(this.lottie.segments[this.animationIndex]);
  }

  play() {
    if (this.isPaused) {
      this.animationItem.play();
      this.isPaused = false;
    } else if (this.playAllSegments)
      if (this.interSegmentDuration === 0)
        this.animationItem.playSegments([this.startFrame, this.endFrame], true);
      else this.next();
    else this.next();
  }

  pause() {
    if (this.isPaused) return;

    this.animationItem.pause();
    this.isPaused = true;
  }

  stop() {
    this.animationItem.stop();
  }

  isPaused: boolean = false;
}

export interface ICharterLottie {
  source: string;
  segments: AnimationSegment[];
}

export class AnimationLoading implements ICharterLottie {
  source = '/assets/stb-setup.json';
  segments: AnimationSegment[] = [
    [0, 100],
    [100, 200],
    [200, 294],
  ];
}

export type LottieAction = 'PLAY' | 'STOP' | 'PAUSE' | 'BACK';
