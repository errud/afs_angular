import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './components/about/about.component';
import { LoginComponent } from './components/Access/login/login.component';
import { RegisterComponent } from './components/Access/register/register.component';
import { AdminPanelComponent } from './components/Admin/admin-panel/admin-panel.component';
import { HomeComponent } from './components/home/home.component';
import { ProductComponent } from './components/product/product.component';
import { SupplierComponent } from './components/supplier/supplier.component';
import { ProfileComponent } from './components/User/profile/profile.component';
import { IsAuthGuard } from './tools/auth-guard.service'


const routes: Routes = [
  { path : 'home', component : HomeComponent },
  { path : 'about', component : AboutComponent},
  { path : 'adminPanel', component : AdminPanelComponent},
  { path : 'login', component : LoginComponent},
  { path : 'register', component : RegisterComponent},
  { path : 'supplier', component : SupplierComponent},
  { path : 'profile', component : ProfileComponent},
  { path : 'product', component : ProductComponent}  

];

@NgModule({
  imports: [RouterModule.forRoot(routes,  { relativeLinkResolution: 'legacy' })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
