import { Component, OnInit } from '@angular/core';
import { Client } from 'src/app/shared/models/client.model';
import { ClientsService } from '../../services/clients.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-list-clients',
  templateUrl: './list-clients.component.html',
  styleUrls: ['./list-clients.component.scss']
})
export class ListClientsComponent implements OnInit {

  public collection$: Observable<Client[]>;
  public headers: String[];
  public btnAjoutTexte: String;
  constructor(
    private cs: ClientsService
    ) {

  }

  ngOnInit() {
    this.collection$ = this.cs.collection$;

    this.headers = ['Nom', 'Adresse', 'Code Postal', 'Ville', 'TJM HT', 'Etat', 'Delete'];
    this.btnAjoutTexte = 'Ajouter un client';
  }

}
