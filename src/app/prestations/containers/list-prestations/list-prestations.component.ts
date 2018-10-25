import { Component, OnInit, OnDestroy } from '@angular/core';
import { PrestationService } from '../../services/prestation.service';
import { Prestation } from 'src/app/shared/models/prestation.model';
import { State } from 'src/app/shared/enums/state.enum';
import { Observable, Subscription } from 'rxjs';

@Component({
  selector: 'app-list-prestations',
  templateUrl: './list-prestations.component.html',
  styleUrls: ['./list-prestations.component.scss']
})
export class ListPrestationsComponent implements OnInit, OnDestroy {
  // public collection: Prestation[];
  // Par convention les observables se terminent par $
  public collection$: Observable<Prestation[]>;
  public headers: String[];
  // private sub: Subscription;
  public btnAjoutTexte: String;
  constructor(
    private ps: PrestationService
    ) {

  }

  ngOnInit() {
    this.collection$ = this.ps.collection$;
    // this.sub = this.ps.collection.subscribe((data) => {
    //   this.collection = data;
    // });
    this.headers = ['Type', 'Client', 'Nb jours', 'TJM HT', 'Total HT', 'Total TTC', 'Action', 'Delete'];
    this.btnAjoutTexte = 'Ajouter une prestation';
  }

  ngOnDestroy() {
    // this.sub.unsubscribe();
  }

}
