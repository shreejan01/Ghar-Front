import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-manage-client',
  templateUrl: './manage-client.component.html',
  styleUrls: ['./manage-client.component.scss']
})
export class ManageClientComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

 addClient() {
    this.router.navigate(['/owner/room/client/add']);
 }

}
