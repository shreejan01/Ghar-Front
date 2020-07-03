import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-owner-nav',
  templateUrl: './owner-nav.component.html',
  styleUrls: ['./owner-nav.component.scss']
})
export class OwnerNavComponent implements OnInit {
  navbarOpen = false;

  toggleNavbar() {
    this.navbarOpen = !this.navbarOpen;
  }
  constructor() { }

  ngOnInit() {
  }

}
