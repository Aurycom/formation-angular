import { Injectable } from '@angular/core';
import {Prestation} from 'src/app/shared/models/prestation.model';
import { fakeCollectionPrestations } from './fake-collection';
import { State } from 'src/app/shared/enums/state.enum';

@Injectable({
  providedIn: 'root'
})
export class PrestationService {

  private _collection: Prestation[];

  constructor() {
    this._collection = fakeCollectionPrestations;
  }

  // get collection
  get collection(): Prestation[] {
    return this._collection;
  }

  // set collection
  set collection(col: Prestation[]) {
    this._collection = col;
  }

  // update item collection
  public update(item: Prestation, state: State) {
    item.state = state;
    // console.log(item.state);
  }

  // delete item collection

  // add item collection
  public add(item: Prestation) {
    this.collection.push(item);
  }

  // get item collection
}
