import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { ClientsComponent } from '../containers/clients/clients.component';
import { AddClientComponent } from '../containers/add-client/add-client.component';


const appRoutes: Routes = [
  { path: '', component: ClientsComponent },
  { path: 'add', component: AddClientComponent }
];

@NgModule({
  imports: [
    RouterModule.forChild(
      appRoutes
    )
  ]
})
export class ClientsRoutingModule { }



