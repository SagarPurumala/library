import { Component, OnInit } from '@angular/core';
import { NavbarService } from 'src/app/navbar.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user-home',
  templateUrl: './user-home.component.html',
  styleUrls: ['./user-home.component.css']
})
export class UserHomeComponent implements OnInit {

  constructor(private nav:NavbarService,private router: Router) { }

  ngOnInit() {
    this.nav.hide();
  }
  mytransaction(){
    this.router.navigate(['/mytransaction']);
  }

}
