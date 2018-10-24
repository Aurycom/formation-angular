import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './containers/login/login.component';
import { PrestationsModule } from '../prestations/prestations.module';
import { LoginRoutingModule } from './routing/login-routing/login-routing.module';

@NgModule({
  imports: [
    CommonModule,
    PrestationsModule,
    LoginRoutingModule
  ],
  declarations: [LoginComponent]
})
export class LoginModule { }
