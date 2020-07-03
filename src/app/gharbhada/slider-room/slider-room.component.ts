import { Component, OnInit } from '@angular/core';
import {NgbCarouselConfig} from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-slider-room',
  templateUrl: './slider-room.component.html',
  styleUrls: ['./slider-room.component.scss'],
  providers: [NgbCarouselConfig]
})
export class SliderRoomComponent implements OnInit {
  constructor(config: NgbCarouselConfig) {
    config.interval = 4000;
    config.wrap = true;
    config.keyboard = false;
    config.pauseOnHover = false;
  }

  ngOnInit() {
  }

}
