import { Component, OnInit } from '@angular/core';
import {NgbCarouselConfig} from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-slider-house',
  templateUrl: './slider-house.component.html',
  styleUrls: ['./slider-house.component.scss'],
  providers: [NgbCarouselConfig]
})
export class SliderHouseComponent implements OnInit {

  constructor(config: NgbCarouselConfig) {
    config.interval = 5000;
    config.wrap = true;
    config.keyboard = false;
    config.pauseOnHover = false;

  }

  ngOnInit() {
  }

}
