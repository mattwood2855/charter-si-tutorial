import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TutorialListPageComponent } from './tutorial-list-page/tutorial-list-page.component';
import { TutorialPageComponent } from './tutorial-page/tutorial-page.component';

const routes: Routes = [
  {
    path: 'tutorial',
    component: TutorialListPageComponent,
  },
  {
    path: 'tutorial/:equipmentType',
    component: TutorialPageComponent,
  },
  {
    path: '',
    redirectTo: '/tutorial',
    pathMatch: 'full',
  },
  {
    path: '**',
    redirectTo: '/tutorial',
    pathMatch: 'full',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
