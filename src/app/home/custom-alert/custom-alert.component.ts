import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-custom-alert',
  templateUrl: './custom-alert.component.html',
  styleUrls: ['./custom-alert.component.scss'],
})
export class CustomAlertComponent implements OnInit {

  constructor(private modalController: ModalController) { }


  ngOnInit() { }

  // alert close
  closeAlert() {
    this.modalController.dismiss();
  }

}
