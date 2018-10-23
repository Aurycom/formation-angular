import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './containers/login/login.component';
import { PrestationsModule } from '../prestations/prestations.module';

@NgModule({
  imports: [
    CommonModule,
    PrestationsModule
  ],
  declarations: [LoginComponent]
})
export class LoginModule { }
