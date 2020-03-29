import { Component, OnInit } from '@angular/core';
import { NavbarService } from 'src/app/navbar.service';
import { AdminnavService } from '../adminnav.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {

  constructor(private nav:NavbarService,private adminnav:AdminnavService) { }

  ngOnInit() {
     this.nav.hide();
     this.adminnav.show();
  }
}
