import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {FormBuilder, Validators} from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  registerForm = this.fb.group({
    firstName: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(10)]],
    lastName: ['', [Validators.required, Validators.minLength(2), Validators.maxLength(9)]],
    contactNo: ['', [Validators.required, Validators.minLength(10), Validators.maxLength(10)]],
    email: ['', [Validators.required, Validators.email] ],
    password: ['', [Validators.required, Validators.minLength(6)]],
    confirmPassword: ['', Validators.required],
    accountType: ['', Validators.required]
  });

  constructor(private fb: FormBuilder, private router: Router) { }

  ngOnInit() {
  }

  onSubmit() {
    alert(JSON.stringify(this.registerForm.value));
  }

  login() {
    this.router.navigate(['/login']);
  }
}
