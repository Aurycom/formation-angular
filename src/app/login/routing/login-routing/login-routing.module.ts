import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from '../../containers/login/login.component';
import { Routes, RouterModule } from '@angular/router';

const appRoutes: Routes = [
  { path: 'login', component: LoginComponent }
];


@NgModule({
  imports: [
    RouterModule.forChild(
      appRoutes
    )
  ]
})
export class LoginRoutingModule { }
