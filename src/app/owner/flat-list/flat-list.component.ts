import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
@Component({
  selector: 'app-flat-list',
  templateUrl: './flat-list.component.html',
  styleUrls: ['./flat-list.component.scss']
})
export class FlatListComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

addFlat() {
this.router.navigate(['/owner/add-flat']);
}

}
