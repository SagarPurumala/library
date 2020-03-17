import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { Routes, RouterModule } from '@angular/router';
import { AppRoutingModule } from '../app-routing.module';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { UserhomeComponent } from './userhome/userhome.component';

const routes: Routes = [
  {path:'login',component:LoginComponent},
  {path:"register",component:RegisterComponent},
 
    {path:"login",component:LoginComponent,children:[{path:"register",component:RegisterComponent},]},
    {path:'userhome',component:UserhomeComponent}
   
];

@NgModule({
  declarations: [LoginComponent, RegisterComponent, UserhomeComponent],
  imports: [RouterModule.forChild(routes),
    CommonModule,
    FormsModule,
    ReactiveFormsModule
  
  ],
  exports:[RegisterComponent,
  LoginComponent]
})
export class UserModule { }
