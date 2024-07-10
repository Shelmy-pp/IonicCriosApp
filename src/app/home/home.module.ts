import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { HomePage } from './home.page';

import { HomePageRoutingModule } from './home-routing.module';
import { ExploreComponent } from './explore/explore.component';
import { OffersComponent } from './offers/offers.component';
import { PlayListComponent } from './play-list/play-list.component';
import { ChatComponent } from './chat/chat.component';
import { TeamComponent } from './team/team.component';
import { FooterImgComponent } from './footer-img/footer-img.component';
import { CustomAlertComponent } from './custom-alert/custom-alert.component';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HomePageRoutingModule
  ],
  declarations: [HomePage,ExploreComponent, OffersComponent, PlayListComponent,ChatComponent,TeamComponent,FooterImgComponent,CustomAlertComponent]
})
export class HomePageModule {}
