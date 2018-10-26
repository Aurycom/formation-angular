import { NgModule } from '@angular/core';
import { RouterModule, Routes, PreloadAllModules } from '@angular/router';

const appRoutes: Routes = [
  { path: '',
    redirectTo: '/login',
    pathMatch: 'full'
  },
  {
    path: 'prestations',
    loadChildren: './prestations/prestations.module#PrestationsModule',
  },
  {
    path: 'clients',
    loadChildren: './clients/clients.module#ClientsModule',
  },
  {
    path: '**',
    loadChildren: './page-not-found/page-not-found.module#PageNotFoundModule',
  }
];


@NgModule({
  imports: [
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: false, // <-- debugging purposes only
        preloadingStrategy: PreloadAllModules
      }
    )
  ]
})
export class AppRoutingModule { }
