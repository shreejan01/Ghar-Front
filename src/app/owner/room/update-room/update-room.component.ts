import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {Room} from "../../../@model/room";
import {ActivatedRoute, Router} from "@angular/router";
import {RoomService} from "../../../@service/room.service";

@Component({
  selector: 'app-update-room',
  templateUrl: './update-room.component.html',
  styleUrls: ['./update-room.component.scss']
})
export class UpdateRoomComponent implements OnInit {
  updateRoomForm: FormGroup;
  room: Room;
  id: number;
  submitted = false;

  constructor(private route: ActivatedRoute, private router: Router, private roomService: RoomService, private fb: FormBuilder) { }

  ngOnInit() {
    this.updateRoomForm = this.fb.group({
      id:[],
      floor: ['', [Validators.required, Validators.maxLength(9)]],
      location: ['', [Validators.required, Validators.minLength(2), Validators.maxLength(15)]],
      price: [0 , [Validators.required, Validators.minLength(1), Validators.maxLength(9)]],
      description:[''],
      facility:[''],
      rules:['']
    });

    this.roomService.getById(this.route.snapshot.params.id)
      .subscribe(data => {
        console.log(data);
        this.updateRoomForm.setValue(data);
      },error => console.log(error));
  }

  onSubmit(){
    this.updateRoom();
  }

  updateRoom(){
    this.roomService.addRoom(this.updateRoomForm.value)
      .subscribe(data => {
        console.log(data), error => console.log(error);
        this.room = new Room();
        this.submitted=true;
        this.gotoList();
      });

  }

  gotoList(){
    this.router.navigate(['owner/room/list']);
  }

}
