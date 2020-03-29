import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminloginComponent } from './adminlogin/adminlogin.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AdminhomeComponent } from './adminhome/adminhome.component';
import { AddbooksComponent } from './addbooks/addbooks.component';
import { UsersComponent } from './users/users.component';




@NgModule({
  declarations: [AdminloginComponent,  AddbooksComponent, UsersComponent],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule
  ],
  exports: [AddbooksComponent,UsersComponent]
})
export class AdminModule { }
