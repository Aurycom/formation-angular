import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PrestationsComponent } from './containers/prestations/prestations.component';
import { ListPrestationsComponent } from './containers/list-prestations/list-prestations.component';
import { TotalPipe } from '../shared/pipes/total.pipe';
import { SharedModule } from '../shared/shared.module';
import { PrestationComponent } from './components/prestation/prestation.component';
import { PrestationsRoutingModule } from './routing/prestations-routing/prestations-routing.module';

import { RouterModule } from '@angular/router';
import { AddPrestationComponent } from './containers/add-prestation/add-prestation.component';

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    PrestationsRoutingModule
  ],
  declarations: [PrestationsComponent, ListPrestationsComponent, PrestationComponent, AddPrestationComponent],
  exports: [PrestationsComponent]
})
export class PrestationsModule { }
