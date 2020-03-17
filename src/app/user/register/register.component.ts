import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { customValidators } from './Validators';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  constructor(private builder:FormBuilder, private router:Router) { }
  regGroup;
  ngOnInit() {
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
      this.router.navigate(['/login']);
    }

}
