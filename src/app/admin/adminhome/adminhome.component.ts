import { Component, OnInit } from '@angular/core';
import { NavbarService } from 'src/app/navbar.service';
import { AdminnavService } from '../adminnav.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-adminhome',
  templateUrl: './adminhome.component.html',
  styleUrls: ['./adminhome.component.css']
})
export class AdminhomeComponent implements OnInit {

  constructor(private nav:NavbarService,private adminnav:AdminnavService,private router:Router) { }

  ngOnInit() {
     this.nav.hide();
     this.adminnav.show();
  }
  addbooks(){
    this.router.navigate(['/addbooks']);
  }
}
