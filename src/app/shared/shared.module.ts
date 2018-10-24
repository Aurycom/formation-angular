import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TotalPipe } from './pipes/total.pipe';
import { TableauComponent } from './components/tableau/tableau.component';
import { StateDirective } from './directives/state.directive';
import { AddRowComponent } from './components/add-row/add-row.component';
import { RouterModule } from '@angular/router';

@NgModule({
  imports: [
    CommonModule,
    RouterModule
  ],
  declarations: [TotalPipe, TableauComponent, StateDirective, AddRowComponent],
  exports: [TotalPipe, TableauComponent, StateDirective, AddRowComponent]
})
export class SharedModule { }
