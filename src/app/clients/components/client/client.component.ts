import { Component, OnInit, Input } from '@angular/core';
import { Client } from 'src/app/shared/models/client.model';
import { ClientState } from 'src/app/shared/enums/client-state.enum';
import { ClientsService } from '../../services/clients.service';

@Component({
  selector: 'app-client',
  templateUrl: './client.component.html',
  styleUrls: ['./client.component.scss']
})
export class ClientComponent implements OnInit {
  public states = Object.values(ClientState);

  @Input() public item: Client;
  constructor(private ps: ClientsService) {

  }

  ngOnInit() {
  }

  public changeState(event): void {
    // console.log(event.target.value);
    const state = event.target.value;
    this.ps.update(this.item, state);
  }

}
