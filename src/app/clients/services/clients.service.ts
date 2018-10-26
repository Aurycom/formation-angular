import { Injectable } from '@angular/core';
import { Client } from 'src/app/shared/models/client.model';
import { fakeCollectionClients } from './fake-collection';
import { ClientState } from 'src/app/shared/enums/client-state.enum';
import { AngularFirestoreCollection, AngularFirestore } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ClientsService {

  private itemsCollection: AngularFirestoreCollection<Client>;
  private _collection$: Observable<Client[]>;

  constructor(
    private afs: AngularFirestore
  ) {
    this.itemsCollection = afs.collection<Client>('clients');
    this.collection$ = this.itemsCollection.valueChanges().pipe(
      // map(data => data.map(client => new Client(client)))
      // Ou version plus détaillée :
      map((data) => {
        // console.log(data);
        return data.map((client) => {
          return new Client(client);
        });
      })
    );
  }

  // get collection
  get collection$(): Observable < Client[] > {
    console.log(this._collection$);

    return this._collection$;
  }

  // set collection
  set collection$(col: Observable<Client[]>) {
    this._collection$ = col;
  }

   // update item collection
   public update(item: Client, state: ClientState) {
    const client  = {...item};
    if (state) {
      client.state = state;
    }
    return this.itemsCollection.doc(item.id).update(client).catch((e) => {
      console.log(e);
    });
  }

   // add item collection
   public add(item: Client) {
    const id = this.afs.createId();
    const client = { id, ...item };
    return this.itemsCollection.doc(id).set(client).catch((e) => {
      console.log(e);
    });
  }

  public delete(item: Client): Promise < any > {
    return this.itemsCollection.doc(item.id).delete().catch((e) => {
      console.log(e);
    });
    // return this.http.delete(`urlapi/prestations/${item.id}`);
  }

  getPrestation(id: string): Observable < Client > {
    return this.itemsCollection.doc<Client>(id).valueChanges();
    // return this.http.get(`urlaspi/prestations/${id}`);
  }
}
