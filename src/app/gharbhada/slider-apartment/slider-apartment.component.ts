import { Component, OnInit } from '@angular/core';
import {NgbCarouselConfig} from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-slider-apartment',
  templateUrl: './slider-apartment.component.html',
  styleUrls: ['./slider-apartment.component.scss'],
  providers: [NgbCarouselConfig]
})
export class SliderApartmentComponent implements OnInit {

  constructor(config: NgbCarouselConfig) {
    config.interval = 7000;
    config.wrap = true;
    config.keyboard = false;
    config.pauseOnHover = false;
  }

  ngOnInit() {
  }

}
