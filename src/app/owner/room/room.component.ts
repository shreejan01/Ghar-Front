import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-room',
  templateUrl: './room.component.html',
  styleUrls: ['./room.component.scss']
})
export class RoomComponent implements OnInit {

constructor(private router: Router) { }

  ngOnInit() {
  }

  addRoom() {
   this.router.navigate(['/owner/room/add']);
  }

   roomList() {
   this.router.navigate(['/owner/room/list']);
  }

  manageClient() {
   this.router.navigate(['/owner/room/client']);
  }

}
