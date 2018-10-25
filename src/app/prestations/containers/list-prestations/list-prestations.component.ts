import { Component, OnInit } from '@angular/core';
import { PrestationService } from '../../services/prestation.service';
import { Prestation } from 'src/app/shared/models/prestation.model';
import { State } from 'src/app/shared/enums/state.enum';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-list-prestations',
  templateUrl: './list-prestations.component.html',
  styleUrls: ['./list-prestations.component.scss']
})
export class ListPrestationsComponent implements OnInit {
  public collection: Prestation[];
  // public collection: Observable<Prestation[]>;
  public headers: String[];
  public btnAjoutTexte: String;
  constructor(
    private ps: PrestationService
    ) {

  }

  ngOnInit() {
    // this.collection = this.ps.collection;
    this.ps.collection.subscribe((data) => {
      this.collection = data;
    });
    this.headers = ['Type', 'Client', 'Nb jours', 'TJM HT', 'Total HT', 'Total TTC', 'Action', 'Delete'];
    this.btnAjoutTexte = 'Ajouter une prestation';
  }

}
