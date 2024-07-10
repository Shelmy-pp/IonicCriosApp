import { Component, OnInit } from '@angular/core';
import { AlertController, ModalController } from '@ionic/angular';
import { CustomAlertComponent } from '../custom-alert/custom-alert.component';

@Component({
  selector: 'app-explore',
  templateUrl: './explore.component.html',
  styleUrls: ['./explore.component.scss'],
})
export class ExploreComponent implements OnInit {

  constructor(private modalController: ModalController) { }

  ngOnInit() { }

  // open alert box on button click
  async openCustomAlert() {
    const modal = await this.modalController.create({
      component: CustomAlertComponent,
      backdropDismiss: true,
      cssClass: 'custom-alert-modal'
    });
    return await modal.present();

  }
}
