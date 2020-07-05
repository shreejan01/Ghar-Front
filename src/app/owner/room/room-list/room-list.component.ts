import { Component, OnInit } from '@angular/core';
import {FormBuilder} from '@angular/forms';
import {RoomService} from "../../../@service/room.service";
import {Router} from "@angular/router";


@Component({
  selector: 'app-room-list',
  templateUrl: './room-list.component.html',
  styleUrls: ['./room-list.component.scss']
})
export class RoomListComponent implements OnInit {
id: number;
allRooms: any;

  constructor(private roomService: RoomService, private formBuilder: FormBuilder, private router: Router) {
    this.allRooms = [];
  }

  ngOnInit() {
         this.listAllRooms();
  }

   listAllRooms() {
         this.roomService.getAll().subscribe((response: any) => {
         this.allRooms = response;
         });
  }

  updateRoom(id : number) {
        this.router.navigate(['owner/room/update',id])
  }

  deleteRoom(id: number) {
    this.roomService.delete(id).subscribe(data => {
      console.log(data);
      this.listAllRooms();
    });
  }

  roomDetails(id: number){

  }

}
