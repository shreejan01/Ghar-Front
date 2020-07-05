import { Component, OnInit } from '@angular/core';
import {FormBuilder, Validators} from '@angular/forms';

@Component({
  selector: 'app-add-flat',
  templateUrl: './add-flat.component.html',
  styleUrls: ['./add-flat.component.scss']
})
export class AddFlatComponent implements OnInit {
addFlatForm = this.fb.group({
floor: ['', [Validators.required, Validators.maxLength(9)]],
    location: ['', [Validators.required, Validators.minLength(2), Validators.maxLength(15)]],
    price: ['', [Validators.required, Validators.minLength(1), Validators.maxLength(9)]],
    size: ['', Validators.required],
    pic: ['', Validators.required]
  });



  constructor(private fb: FormBuilder) { }

  ngOnInit() {
  }

  onSubmit() {
    alert(JSON.stringify(this.addFlatForm.value));
  }

}
