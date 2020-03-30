import { Component, OnInit } from '@angular/core';
import { NavbarService } from 'src/app/navbar.service';
import { AdminnavService } from '../adminnav.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-addbooks',
  templateUrl: './addbooks.component.html',
  styleUrls: ['./addbooks.component.css']
})
export class AddbooksComponent implements OnInit {

  constructor(private nav:NavbarService,private adminnav:AdminnavService,private router:Router) { }

  ngOnInit() {
     this.nav.hide();
     this.adminnav.show();
  }
}
