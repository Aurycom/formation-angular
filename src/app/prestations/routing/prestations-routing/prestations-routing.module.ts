import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PrestationsComponent } from '../../containers/prestations/prestations.component';
import { Routes, RouterModule } from '@angular/router';
import { AddPrestationComponent } from '../../containers/add-prestation/add-prestation.component';

const appRoutes: Routes = [
  { path: '', component: PrestationsComponent },
  { path: 'add', component: AddPrestationComponent }
];


@NgModule({
  imports: [
    RouterModule.forChild(
      appRoutes
    )
  ]
})
export class PrestationsRoutingModule { }
