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
import { NewCommentComponent } from './components/new-comment/new-comment.component';
import { ProductComponent } from './components/product/product.component';
import { SupplierComponent } from './components/supplier/supplier.component';
import { BuyerComponent } from './components/buyer/buyer.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NbThemeModule, NbLayoutModule, NbSidebarModule, NbMenuModule } from '@nebular/theme';
import { NbEvaIconsModule } from '@nebular/eva-icons';
import { NavComponent } from './components/nav/nav.component';


@NgModule({
  declarations: [
    AppComponent,
    AboutComponent,
    AuthComponent,
    LoginComponent,
    RegisterComponent,
    HomeComponent,
    AdminMenuComponent,
    ProfileComponent,
    NewCommentComponent,
    ProductComponent,
    SupplierComponent,
    BuyerComponent,
    NavComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    NbThemeModule.forRoot({ name: 'cosmic' }),
    NbLayoutModule,
    NbEvaIconsModule,
    NbSidebarModule.forRoot(),
    NbMenuModule.forRoot(),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
