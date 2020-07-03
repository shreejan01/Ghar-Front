import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-gharbhada',
  templateUrl: './gharbhada.component.html',
  styleUrls: ['./gharbhada.component.scss']
})
export class GharbhadaComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }
  login(){
    this.router.navigate(['/login']);
  }
}
