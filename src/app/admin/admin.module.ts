import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminloginComponent } from './adminlogin/adminlogin.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AdminhomeComponent } from './adminhome/adminhome.component';
import { AddbooksComponent } from './addbooks/addbooks.component';
import { UsersComponent } from './users/users.component';
import { Routes,RouterModule } from '@angular/router';
import { AddusersComponent } from './addusers/addusers.component';

const routes: Routes = [
  {path:'addbooks',component:AddbooksComponent},
  {path:'users',component:UsersComponent},
  {path:'addusers',component:AddusersComponent}
];

@NgModule({
  declarations: [AdminloginComponent  ,AdminhomeComponent,
    AddbooksComponent,
    UsersComponent,
    AddusersComponent],
  imports: [RouterModule.forChild(routes),
    CommonModule,
    FormsModule,
    ReactiveFormsModule
  ],
  exports: [RouterModule]
})
export class AdminModule { }
