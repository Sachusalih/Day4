import { Component, NgModule, SimpleChange } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ArtformComponent } from './pages/artform/artform.component';
import { ContactUsComponent } from './pages/contact-us/contact-us.component';
import { HomepageComponent } from './pages/homepage/homepage.component';
import { LoginComponent } from './pages/login/login.component';
import { SignupComponent } from './pages/signup/signup.component';
import { SinglePageComponent } from './pages/single-page/single-page.component';

const routes: Routes = [
  {
    path:'',component:HomepageComponent
  },
  {
    path:'Artform',component:ArtformComponent
  },
  {
    path:'contact',component:ContactUsComponent
  },
  {
    path:'login',component:LoginComponent
  },
  {
    path:'signup',component:SignupComponent
  },
  {
    path:'single',component:SinglePageComponent
  },


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
