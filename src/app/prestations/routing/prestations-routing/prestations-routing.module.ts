import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PrestationsComponent } from '../../containers/prestations/prestations.component';
import { Routes, RouterModule } from '@angular/router';
import { AddPrestationComponent } from '../../containers/add-prestation/add-prestation.component';
import { EditPrestationComponent } from '../../containers/edit-prestation/edit-prestation.component';
import { DetailClientPrestaComponent } from '../../containers/detail-client-presta/detail-client-presta.component';
import { DetailComponent } from '../../containers/detail/detail.component';

const appRoutes: Routes = [
  {
    path: '',
    component: PrestationsComponent,
    children : [
      {path: 'detail', component: DetailComponent},
      {path: 'client', component: DetailClientPrestaComponent}
    ]
  },
  {
    path: 'add',
    component : AddPrestationComponent
  },
  {
    path: 'edit/:id',
    component : EditPrestationComponent
  }
];


@NgModule({
  imports: [
    RouterModule.forChild(
      appRoutes
    )
  ]
})
export class PrestationsRoutingModule { }
