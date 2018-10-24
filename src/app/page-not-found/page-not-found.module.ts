import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PageNotFoundComponent } from './containers/page-not-found/page-not-found.component';
import { PageNotFoundRoutingModule } from './routing/page-not-found-routing/page-not-found-routing.module';

@NgModule({
  imports: [
    CommonModule,
    PageNotFoundRoutingModule
  ],
  declarations: [PageNotFoundComponent]
})
export class PageNotFoundModule { }
