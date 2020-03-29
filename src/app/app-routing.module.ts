import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './user/login/login.component';
import { UserModule } from './user/user.module';
import { AdminModule } from './admin/admin.module';
import { HomeModule } from './home/home.module';
import { RegisterComponent } from './user/register/register.component';
import { AboutComponent } from './about/about.component';
import { HomeComponent } from './home/home.component';
import { UserhomeComponent } from './user/userhome/userhome.component';
import { AdminloginComponent } from './admin/adminlogin/adminlogin.component';
import { AdminhomeComponent } from './admin/adminhome/adminhome.component';
import { AddbooksComponent } from './admin/addbooks/addbooks.component';
import { UsersComponent } from './admin/users/users.component';


const routes: Routes = [
  {path:'login',component:LoginComponent},
  {path:"register",component:RegisterComponent},
  {path:'adminlogin',component:AdminloginComponent},
  {path:'adminhome',component:AdminhomeComponent},
 
    {path:"login",component:LoginComponent,children:[{path:"register",component:RegisterComponent},]},
    {path:"about",component:AboutComponent},
    {path:'home',component:HomeComponent},
    {path:'userhome',component:UserhomeComponent},
    {path:"adminhome",component:AdminhomeComponent,children:[{path:'addbooks',component:AddbooksComponent}]},
    {path:'addbooks',component:AddbooksComponent},
    {path:'users',component:UsersComponent}
   
];

@NgModule({
  imports: [RouterModule.forRoot(routes),
  UserModule,
  AdminModule,
  HomeModule
],
  exports: [RouterModule]
})
export class AppRoutingModule { }
