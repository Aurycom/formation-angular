import { Component, OnInit } from '@angular/core';
import { ClientState } from 'src/app/shared/enums/client-state.enum';
import { Client } from 'src/app/shared/models/client.model';
import { Router } from '@angular/router';
import { ClientsService } from '../../services/clients.service';

@Component({
  selector: 'app-add-client',
  templateUrl: './add-client.component.html',
  styleUrls: ['./add-client.component.scss']
})
export class AddClientComponent implements OnInit {
  public states = Object.values(ClientState);
  constructor(
    private ps: ClientsService,
    private router: Router
  ) { }

  ngOnInit() {
  }

  public add(item: Client): void {
    this.ps.add(item);
    this.router.navigate(['/clients']);
  }
}
