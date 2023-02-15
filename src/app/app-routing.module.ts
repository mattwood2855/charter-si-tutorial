import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TutorialListPageComponent } from './tutorial-list-page/tutorial-list-page.component';
import { TutorialPageComponent } from './tutorial-page/tutorial-page.component';

const routes: Routes = [
  {
    path: 'tutorials',
    component: TutorialListPageComponent,
  },
  {
    path: 'tutorial/:equipmentType',
    component: TutorialPageComponent,
  },
  {
    path: '',
    redirectTo: '/tutorials',
    pathMatch: 'full',
  },
  {
    path: '**',
    redirectTo: '/tutorials',
    pathMatch: 'full',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
