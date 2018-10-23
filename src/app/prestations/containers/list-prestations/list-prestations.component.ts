import { Component, OnInit } from '@angular/core';
import { PrestationService } from '../../services/prestation.service';
import { Prestation } from 'src/app/shared/models/prestation.model';
import { State } from 'src/app/shared/enums/state.enum';

@Component({
  selector: 'app-list-prestations',
  templateUrl: './list-prestations.component.html',
  styleUrls: ['./list-prestations.component.scss']
})
export class ListPrestationsComponent implements OnInit {
  public collection: Prestation[];
  public titles: String[];
  public states = Object.values(State);
  constructor(
    private ps: PrestationService
    ) {

  }

  ngOnInit() {
    this.collection = this.ps.collection;
    this.titles = ['Type', 'Client', 'Nb jours', 'TJM HT', 'Total HT', 'Total TTC', 'Action'];
  }

}
