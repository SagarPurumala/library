import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserLoginComponent } from './user-login/user-login.component';
import { UserregistrationComponent } from './userregistration/userregistration.component';
import { UserHomeComponent } from './user-home/user-home.component';
import { AtmsimulatorComponent } from './atmsimulator/atmsimulator.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MyTransactionComponent } from './my-transaction/my-transaction.component';



@NgModule({
  declarations: [UserLoginComponent, UserregistrationComponent, UserHomeComponent, AtmsimulatorComponent,MyTransactionComponent],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class UserModule { }
