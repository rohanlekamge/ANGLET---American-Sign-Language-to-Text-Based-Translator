import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {HomeComponent} from './home/home.component';
// import {ProfileComponent} from './profile/profile.component';
// import{AboutComponent} from './about/about.component';

const routes: Routes = [
  {path:'',component:HomeComponent},
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
}) 
export class AppRoutingModule { }
