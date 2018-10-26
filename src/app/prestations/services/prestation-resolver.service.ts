import { Injectable } from '@angular/core';
import { Prestation } from 'src/app/shared/models/prestation.model';
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { Observable, of, EMPTY } from 'rxjs';
import { PrestationService } from './prestation.service';
import { take, mergeMap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class PrestationResolverService implements Resolve<Prestation> {

  constructor(private ps: PrestationService, private router: Router) { }

  public resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<Prestation> {

    const id = route.paramMap.get('id');

    return this.ps.getPrestation(id).pipe(
      take(1),
      mergeMap(data => {
        if (data) {
          return of(data);
        } else {
          this.router.navigate(['/prestations']);
          return EMPTY;
        }
      })
    );

  }
}
