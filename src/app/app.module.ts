import { registerLocaleData } from '@angular/common';
import localeFr from '@angular/common/locales/fr';
import { LOCALE_ID, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AppComponent } from './app.component';
import { PrestationsModule } from './prestations/prestations.module';
import { UiModule } from './ui/ui.module';
import { Router } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { LoginModule } from './login/login.module';
import { PageNotFoundModule } from './page-not-found/page-not-found.module';
import { ClientsModule } from './clients/clients.module';

// the second parameter 'fr' is optional
registerLocaleData(localeFr, 'fr');

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    NgbModule.forRoot(),
    LoginModule,
    AppRoutingModule,
    UiModule,
    PageNotFoundModule,

  ],
  providers: [ { provide: LOCALE_ID, useValue: 'fr' } ],
  bootstrap: [AppComponent]
})
export class AppModule {

  // Diagnostic only: inspect router configuration
  constructor(router: Router) {
    // Use a custom replacer to display function names in the route configs
    const replacer = (key, value) => (typeof value === 'function') ? value.name : value;

    console.log('Routes: ', JSON.stringify(router.config, replacer, 2));
  }

}
