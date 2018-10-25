import { Injectable } from '@angular/core';
import {Prestation} from 'src/app/shared/models/prestation.model';
import { fakeCollectionPrestations } from './fake-collection';
import { State } from 'src/app/shared/enums/state.enum';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class PrestationService {

  private itemsCollection: AngularFirestoreCollection<Prestation>;
  private _collection$: Observable<Prestation[]>;

  constructor(
    private afs: AngularFirestore
  ) {
    // this._collection = fakeCollectionPrestations;
    this.itemsCollection = afs.collection<Prestation>('prestations');
    this.collection$ = this.itemsCollection.valueChanges().pipe(
      map(data => data.map(presta => new Prestation(presta)))
      // Ou version plus détaillée :
      // map((data) => {
      //   return data.map((presta) => {
      //     return new Prestation(presta);
      //   });
      // })
    );
  }

  // get collection
  get collection$(): Observable<Prestation[]> {
    return this._collection$;
  }

  // set collection
  set collection$(col: Observable<Prestation[]>) {
    this._collection$ = col;
  }

  // update item collection
  public update(item: Prestation, state: State) {
    item.state = state;
    // console.log(item.state);
  }

  // delete item collection

  // add item collection
  public add(item: Prestation) {
    // this.collection.push(new Prestation(item));
  }

  // get item collection
}
