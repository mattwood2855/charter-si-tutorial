import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-tutorial-list-page',
  templateUrl: './tutorial-list-page.component.html',
  styleUrls: ['./tutorial-list-page.component.scss']
})
export class TutorialListPageComponent {
  constructor(private router: Router) {
    
  }

  equipmentClicked(equipmentType: 'MODEM' | 'ROUTER' | 'STB') {
    this.router.navigateByUrl('/tutorial/' + equipmentType.toLowerCase());
  }
}
