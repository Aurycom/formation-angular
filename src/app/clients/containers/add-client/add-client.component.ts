import { Component, OnInit } from '@angular/core';
import { ClientState } from 'src/app/shared/enums/client-state.enum';

@Component({
  selector: 'app-add-client',
  templateUrl: './add-client.component.html',
  styleUrls: ['./add-client.component.scss']
})
export class AddClientComponent implements OnInit {
  public states = Object.values(ClientState);
  constructor() { }

  ngOnInit() {
  }

}
