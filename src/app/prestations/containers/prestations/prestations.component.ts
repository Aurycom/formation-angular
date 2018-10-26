import { Component, OnInit, Input } from '@angular/core';
import { RouteM } from 'src/app/shared/models/route.model';

@Component({
  selector: 'app-prestations',
  templateUrl: './prestations.component.html',
  styleUrls: ['./prestations.component.scss']
})
export class PrestationsComponent implements OnInit {
  @Input() routes: RouteM[];
  constructor() { }

  ngOnInit() {

    this.routes = [
      {
        route: 'detail',
        label: 'Détail prestation'
      },
      {
        route: 'client',
        label: 'Détail client'
      }
    ];
  }

}
