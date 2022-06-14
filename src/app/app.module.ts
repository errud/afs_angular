import { getInstructionStatements } from '@angular/compiler/src/render3/view/util';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AboutComponent } from './components/about/about.component';
import { AuthComponent } from './components/Access/auth/auth.component';
import { LoginComponent } from './components/Access/login/login.component';
import { RegisterComponent } from './components/Access/register/register.component';
import { HomeComponent } from './components/home/home.component';
import { AdminMenuComponent } from './components/nav/admin-menu/admin-menu.component';
import { ProfileComponent } from './components/User/profile/profile.component';

@NgModule({
  declarations: [
    AppComponent,
    AboutComponent,
    AuthComponent,
    LoginComponent,
    RegisterComponent,
    HomeComponent,
    AdminMenuComponent,
    ProfileComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
