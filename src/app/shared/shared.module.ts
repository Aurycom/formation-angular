import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TotalPipe } from './pipes/total.pipe';
import { TableauComponent } from './components/tableau/tableau.component';
import { StateDirective } from './directives/state.directive';
import { AddRowComponent } from './components/add-row/add-row.component';
import { RouterModule } from '@angular/router';
import { TableauLightComponent } from './components/tableau-light/tableau-light.component';
import { TemplateAComponent } from './templates/template-a/template-a.component';
import { TemplateBComponent } from './templates/template-b/template-b.component';
import { TemplateCComponent } from './templates/template-c/template-c.component';
import { TemplateDComponent } from './templates/template-d/template-d.component';
import { NavTabsComponent } from './components/nav-tabs/nav-tabs.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule
  ],
  declarations: [TotalPipe, TableauComponent, StateDirective, AddRowComponent,
    TableauLightComponent, TemplateAComponent, TemplateBComponent, TemplateCComponent, TemplateDComponent, NavTabsComponent],
  // tslint:disable-next-line:max-line-length
  exports: [TotalPipe, TableauComponent, StateDirective, AddRowComponent,
    TableauLightComponent, TemplateAComponent, TemplateBComponent, TemplateCComponent, TemplateDComponent, NavTabsComponent]
})
export class SharedModule { }
