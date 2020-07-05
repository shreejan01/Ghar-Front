import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-apartment-list',
  templateUrl: './apartment-list.component.html',
  styleUrls: ['./apartment-list.component.scss']
})
export class ApartmentListComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

addApartment() {
          this.router.navigate(['/owner/add-apartment']);
}
}
