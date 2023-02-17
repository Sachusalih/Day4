import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomepageComponent } from './pages/homepage/homepage.component';
import { ArtformComponent } from './pages/artform/artform.component';
import { LoginComponent } from './pages/login/login.component';
import { SignupComponent } from './pages/signup/signup.component';
import { ContactUsComponent } from './pages/contact-us/contact-us.component';
import { SinglePageComponent } from './pages/single-page/single-page.component';
import { NavbarComponent } from './units/navbar/navbar.component';
import { FooterComponent } from './units/footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    HomepageComponent,
    ArtformComponent,
    LoginComponent,
    SignupComponent,
    ContactUsComponent,
    SinglePageComponent,
    NavbarComponent,
    FooterComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
