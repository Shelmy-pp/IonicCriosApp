import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePage } from './home.page';
import { ExploreComponent } from './explore/explore.component';
import { OffersComponent } from './offers/offers.component';

const routes: Routes = [
  {
    path: '',
    component: HomePage,
  },
  {
    path: 'explore',
    component: ExploreComponent
  },
  {
    path: 'offers',
    component: OffersComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomePageRoutingModule {}
