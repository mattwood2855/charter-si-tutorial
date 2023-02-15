import { Component, OnInit } from '@angular/core';
import { Subject } from 'rxjs';
import { AnimationLoading, LottieAction } from '../lottie/lottie.component';
import { SelfInstallTutorialServiceService } from '../services/self-install-tutorial-service.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-tutorial-page',
  templateUrl: './tutorial-page.component.html',
  styleUrls: ['./tutorial-page.component.scss'],
  providers: [SelfInstallTutorialServiceService],
})
export class TutorialPageComponent implements OnInit {
  lottie = new AnimationLoading();
  lottieSubject = new Subject<LottieAction>();
  equipment = {};
  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.equipment = this.route.snapshot.paramMap.get('equipmentType');
    console.log(this.equipment);
  }
}
