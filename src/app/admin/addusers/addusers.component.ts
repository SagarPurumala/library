import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { customValidators } from './Validators';
import { NavbarService } from 'src/app/navbar.service';
import { AdminnavService } from '../adminnav.service';


@Component({
  selector: 'app-addusers',
  templateUrl: './addusers.component.html',
  styleUrls: ['./addusers.component.css']
})
export class AddusersComponent implements OnInit {

 
  constructor(private builder:FormBuilder, private router:Router,private nav:NavbarService,private adminnav:AdminnavService) { }
  regGroup;
  ngOnInit() {
    this.nav.hide();
    this.adminnav.show();
    this.regGroup=this.builder.group({
      firstname:['',Validators.required],
      lastname:['',Validators.required],
      email:['',[Validators.required]],
      password: ['',[Validators.required]],
      confirmpass:['',[Validators.required]],
      mobile:['',[Validators.required,Validators.minLength(10)]],
      dob:['',[Validators.required]]
    },{validators: customValidators })
  }
  submit()
    {
      let userdetails=JSON.stringify(this.regGroup.value);
      localStorage.setItem(this.regGroup.value.email,userdetails);
//       const mybody = document.getElementsByTagName("body")[0];
//     const mytable = mybody.getElementsByTagName("table")[0];
//     const mytablebody = mytable.getElementsByTagName("tbody")[0];
//     const myrow = mytablebody.getElementsByTagName("tr")[1];
//     const mycel = myrow.getElementsByTagName("td");
//    const myceltext=mycel.this.regGroup.value.email;
//    const currenttext=document.createTextNode(myceltext.data);
// mybody.appendChild(currenttext);

      this.router.navigate(['/users']);
    }

}
