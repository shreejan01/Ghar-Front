import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-house-list',
  templateUrl: './house-list.component.html',
  styleUrls: ['./house-list.component.scss']
})
export class HouseListComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

addHouse() {
   this.router.navigate(['/owner/add-house']);
}

}
