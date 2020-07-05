import { Component, OnInit } from '@angular/core';
import {FormBuilder, Validators} from '@angular/forms';

@Component({
  selector: 'app-add-bill',
  templateUrl: './add-bill.component.html',
  styleUrls: ['./add-bill.component.scss']
})
export class AddBillComponent implements OnInit {
addBillForm = this.fb.group({
dateFrom: ['', Validators.required],
    dateTo: ['', Validators.required],
    rentAmount: ['', [Validators.required, Validators.maxLength(6)]],
    status: ['', Validators.required]
  });



  constructor(private fb: FormBuilder) { }

  ngOnInit() {
  }

  onSubmit() {
    alert(JSON.stringify(this.addBillForm.value));
  }

}
