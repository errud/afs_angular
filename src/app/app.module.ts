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
import { NbThemeModule, NbLayoutModule, NbSidebarModule, NbMenuModule, NbIconModule, NbDialogModule, NbInputModule, NbListModule, NbSelectModule,  NbButtonModule, NbCardModule, NbToastrModule, NbSpinnerModule, NbDatepickerModule } from '@nebular/theme';
import { NbEvaIconsModule } from '@nebular/eva-icons';
import { NavComponent } from './components/nav/nav.component';
import { AdminPanelComponent } from './components/Admin/admin-panel/admin-panel.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { TokenInterceptor } from './tools/token-interceptor';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DetailsComponent } from './components/product/details/details.component';
import { AddComponent } from './components/product/add/add.component';
import { AddpersonComponent } from './components/supplier/addperson/addperson.component';
import { PersondetailComponent } from './components/supplier/persondetail/persondetail.component';


@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    HomeComponent,
    AboutComponent,  
    LoginComponent,
    RegisterComponent,
    AuthComponent,
    AdminPanelComponent,
    ProductComponent,
    SupplierComponent,
    BuyerComponent,
    ProfileComponent,
    AdminMenuComponent,
    NewCommentComponent,
    DetailsComponent,
    AddComponent,
    AddpersonComponent,
    PersondetailComponent,   

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
    NbButtonModule,
    NbCardModule,
    NbIconModule,
    NbInputModule,
    NbListModule,
    NbDatepickerModule.forRoot(),
    NbDialogModule.forRoot(),
    FormsModule,
    NbToastrModule.forRoot(),
    ReactiveFormsModule,  
    HttpClientModule,
    NbSpinnerModule,
    NbSelectModule
  ],
  providers: [
    {provide: HTTP_INTERCEPTORS, useClass: TokenInterceptor, multi: true}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
