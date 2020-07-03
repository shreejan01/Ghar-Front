import { Component, OnInit } from '@angular/core';
import {NgbCarouselConfig} from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-slider-flat',
  templateUrl: './slider-flat.component.html',
  styleUrls: ['./slider-flat.component.scss'],
  providers: [NgbCarouselConfig]
})
export class SliderFlatComponent implements OnInit {

  constructor(config: NgbCarouselConfig) {
    config.interval = 6000;
    config.wrap = true;
    config.keyboard = false;
    config.pauseOnHover = false;

  }

  ngOnInit() {
  }

}
