import { Injectable } from '@angular/core';
import { Client } from 'src/app/shared/models/client.model';
import { fakeCollectionClients } from './fake-collection';
import { ClientState } from 'src/app/shared/enums/client-state.enum';

@Injectable({
  providedIn: 'root'
})
export class ClientsService {
  private _collection: Client[];

  constructor() {
    this._collection = fakeCollectionClients;
  }

  // get collection
  get collection(): Client[] {
    console.log(this._collection);

    return this._collection;
  }

  // set collection
  set collection(col: Client[]) {
    this._collection = col;
  }

   // update item collection
   public update(item: Client, state: ClientState) {
    item.state = state;
    // console.log(item.state);
  }
}
