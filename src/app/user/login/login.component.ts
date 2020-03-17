import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private builder:FormBuilder, private router: Router) { }
  loginGroup;
  error;
  ngOnInit() {
    this.loginGroup=this.builder.group({
      email:['',[Validators.required]],
      password: ['',[Validators.required]],
    })
  }
  submit()
{
  let userstring=localStorage.getItem(this.loginGroup.value.email);
  if(userstring != null)
  {
    let userobj=JSON.parse(userstring);
    console.log(userobj.email===this.loginGroup.value.email && userobj.password=== this.loginGroup.value.password);
    if(userobj.email===this.loginGroup.value.email && userobj.password=== this.loginGroup.value.password)
    {
      sessionStorage.setItem('user',userobj.email);
      this.router.navigate(['/userhome']);
    }
    else
    {
      this.error=true;
    }
  }
  else
  {
    this.error=true;
  }
}


}
