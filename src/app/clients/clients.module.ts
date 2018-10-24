import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListClientsComponent } from './containers/list-clients/list-clients.component';
import { ClientComponent } from './components/client/client.component';
import { SharedModule } from '../shared/shared.module';
import { ClientsRoutingModule } from './clients-routing/clients-routing.module';
import { ClientsComponent } from './containers/clients/clients.component';
import { AddClientComponent } from './containers/add-client/add-client.component';
import { RouterModule } from '@angular/router';

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    ClientsRoutingModule
  ],
  declarations: [ClientsComponent, ListClientsComponent, ClientComponent, AddClientComponent],
  exports: [ClientsComponent]
})
export class ClientsModule { }
