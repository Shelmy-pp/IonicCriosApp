import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-offers',
  templateUrl: './offers.component.html',
  styleUrls: ['./offers.component.scss'],
})
export class OffersComponent implements OnInit {
  items: any = [
    { image: '/assets/images/ic1.png', details: 'Lorem ipsum dolor', multilineText: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.\nSuspendisse vel leo efficitur, venenatis est ut, tincidunt nibh.\nSuspendisse lobortis lectus vel imperdiet ullamcorper.' },
    { image: '/assets/images/ic2.png', details: 'Lorem ipsum dolor', multilineText: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.\nSuspendisse vel leo efficitur, venenatis est ut, tincidunt nibh.\nSuspendisse lobortis lectus vel imperdiet ullamcorper.' },
    // Add more items as needed
  ];
  constructor() { }

  ngOnInit() { }

}
