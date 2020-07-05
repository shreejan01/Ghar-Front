import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {Router} from '@angular/router';
import {RoomService} from "../../../@service/room.service";
import {Room} from "../../../@model/room";

@Component({
  selector: 'app-add-room',
  templateUrl: './add-room.component.html',
  styleUrls: ['./add-room.component.scss']
})
export class AddRoomComponent implements OnInit {
 addRoomForm: FormGroup;
room : Room;
submitted = false;

constructor(private roomService: RoomService, private fb: FormBuilder, private router: Router) { }

  ngOnInit() {
    this.addRoomForm = this.fb.group({
      floor: ['', [Validators.required, Validators.maxLength(9)]],
      location: ['', [Validators.required, Validators.minLength(2), Validators.maxLength(15)]],
      price: [0 , [Validators.required, Validators.minLength(1), Validators.maxLength(9)]],
      description:[''],
      facility:[''],
      rules:['']
    });
  }

    save() {
      this.roomService.addRoom(this.addRoomForm.value)
       .subscribe(data => {
         console.log(data), error => console.log(error);
         this.room = new Room();
         this.submitted=true;
         this.gotoList();
       });
    }

   gotoList() {
     this.router.navigate(['/owner/room/list']);
   }

  onSubmit(value: any) {
       this.save();
  }

}
