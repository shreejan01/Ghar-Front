import { Component, OnInit } from '@angular/core';
import {FormBuilder, Validators} from '@angular/forms';

@Component({
  selector: 'app-add-client',
  templateUrl: './add-client.component.html',
  styleUrls: ['./add-client.component.scss']
})
export class AddClientComponent implements OnInit {
addFlatForm = this.fb.group({
roomId: ['', [Validators.required, Validators.maxLength(9)]],
    clientName: ['', [Validators.required, Validators.minLength(2), Validators.maxLength(20)]],
    date: ['', Validators.required]
  });



  constructor(private fb: FormBuilder) { }

  ngOnInit() {
  }

  onSubmit() {
    alert(JSON.stringify(this.addFlatForm.value));
  }

}
