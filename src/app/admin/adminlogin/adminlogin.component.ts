import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { NavbarService } from 'src/app/navbar.service';

@Component({
  selector: 'app-adminlogin',
  templateUrl: './adminlogin.component.html',
  styleUrls: ['./adminlogin.component.css']
})
export class AdminloginComponent implements OnInit {
  aloginGroup;
  error;

  constructor(private builder:FormBuilder, private router: Router,private nav:NavbarService) { }

  ngOnInit() {
    this.nav.show();
    this.aloginGroup=this.builder.group({
      aemail:['',[Validators.required]],
      apassword: ['',[Validators.required]],
    })
  }
  submit()
  {
    const adminemail="admin";
    const adminpassword="admin";
    if(adminemail==this.aloginGroup.value.aemail&&adminpassword==this.aloginGroup.value.apassword){
    sessionStorage.setItem('AdminEmail',this.aloginGroup.value.aemail);
    sessionStorage.setItem('AdminPassword',this.aloginGroup.value.apassword);
     this.router.navigate(['/adminhome']);
    }
    else
         {
           this.error=true;
       }
  }
  // submit()
  // {

  //   let userstring=localStorage.getItem(this.loginGroup.value.email);
  //   if(userstring != null)
  //   {
  //     let userobj=JSON.parse(userstring);
  //     console.log(userobj.email===this.loginGroup.value.email && userobj.password=== this.loginGroup.value.password);
  //     if(userobj.email===this.loginGroup.value.email && userobj.password=== this.loginGroup.value.password)
  //     {
  //       sessionStorage.setItem('user',userobj.email);
  //       this.router.navigate(['/adminhome']);
  //     }
  //     else
  //     {
  //       this.error=true;
  //     }
  //   }
  //   else
  //   {
  //     this.error=true;
  //   }
  // }
  
  
  }
