import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PrestationsComponent } from './containers/prestations/prestations.component';
import { ListPrestationsComponent } from './containers/list-prestations/list-prestations.component';
import { TotalPipe } from '../shared/pipes/total.pipe';
import { SharedModule } from '../shared/shared.module';
import { PrestationComponent } from './components/prestation/prestation.component';

@NgModule({
  imports: [
    CommonModule,
    SharedModule
  ],
  declarations: [PrestationsComponent, ListPrestationsComponent, PrestationComponent],
  exports: [PrestationsComponent]
})
export class PrestationsModule { }
