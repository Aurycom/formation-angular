import { Component, OnInit } from '@angular/core';
import { Client } from 'src/app/shared/models/client.model';
import { ClientsService } from '../../services/clients.service';

@Component({
  selector: 'app-list-clients',
  templateUrl: './list-clients.component.html',
  styleUrls: ['./list-clients.component.scss']
})
export class ListClientsComponent implements OnInit {

  public collection: Client[];
  public headers: String[];
  public btnAjoutTexte: String;
  constructor(
    private ps: ClientsService
    ) {

  }

  ngOnInit() {
    this.collection = this.ps.collection;
    console.log(this.collection);

    this.headers = ['Id', 'Nom', 'Adresse', 'Code Postal', 'Ville', 'TJM HT', 'Etat', 'Delete'];
    this.btnAjoutTexte = 'Ajouter un client';
  }

}
