import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {FormBuilder, Validators} from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  loginForm = this.fb.group({
    email: ['', [Validators.required, Validators.email]],
    password: ['', Validators.required]
  });
  constructor(private fb: FormBuilder, private router: Router) { }

  ngOnInit() {
  }
  onSubmit() {
    alert(JSON.stringify(this.loginForm.value));
  }

  register() {
    this.router.navigate(['/register']);
  }

}
