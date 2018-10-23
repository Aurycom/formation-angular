import { Injectable } from '@angular/core';
import {Prestation} from 'src/app/shared/models/prestation.model';
import { fakeCollection } from './fake-collection';

@Injectable({
  providedIn: 'root'
})
export class PrestationService {

  private _collection: Prestation[];

  constructor() {
    this._collection = fakeCollection;
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

  // delete item collection

  // add item collection

  // get item collection
}
