import { Injectable } from '@angular/core';
import {Prestation} from 'src/app/shared/models/prestation.model';
import { fakeCollectionPrestations } from './fake-collection';
import { State } from 'src/app/shared/enums/state.enum';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';
import { Observable, BehaviorSubject } from 'rxjs';
import { map } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';
import { ClientsService } from 'src/app/clients/services/clients.service';

@Injectable({
  providedIn: 'root'
})
export class PrestationService {

  private itemsCollection: AngularFirestoreCollection<Prestation>;
  private _collection$: Observable<Prestation[]>;
  public presta$: BehaviorSubject<Prestation> = new BehaviorSubject<Prestation>(null);

  constructor(
    private afs: AngularFirestore,
    private http: HttpClient,
    private cs: ClientsService
  ) {
    // this._collection = fakeCollectionPrestations;
    this.itemsCollection = afs.collection<Prestation>('prestations');
    this.collection$ = this.itemsCollection.valueChanges().pipe(
      // Plus simple
      // map(data => data.map(presta => new Prestation(presta)))
      // Ou version plus détaillée :
      map((data) => {
        this.presta$.next(new Prestation(data[0]));
        console.log(this.presta$.value);
        return data.map((presta) => {
          return new Prestation(presta);
        });
      })
    );
    /* Exemple d'utilisation en utilisation du full rest */
    // Retourne forcement un observable
    // this.collection$ = this.http.get<Prestation[]>('url-api/prestations').pipe(
    //   map(data => data.map(presta => new Prestation(presta)))
    // );
  }

  // get collection
  get collection$(): Observable<Prestation[]> {
    return this._collection$;
  }

  // set collection
  set collection$(col: Observable<Prestation[]>) {
    this._collection$ = col;
  }

  // add presta
  public add(item: Prestation): Promise<any> {
    const id = this.afs.createId();
    const prestation = { id, ...item };
    return this.itemsCollection.doc(id).set(prestation).catch((e) => {
      console.log(e);
    });
    /* Exemple d'utilisation en utilisation du full rest */
    // Retourne forcement un observable
    // return this.http.post('urlapi/prestations', item);
  }


  public update(item: Prestation, state?: State): Promise<any> {
    // Décompose l'objet item de type prestation en objet avec clés/valeurs
    const presta  = {...item};
    if (state) {
      presta.state = state;
    }
    return this.itemsCollection.doc(item.id).update(presta).catch((e) => {
      console.log(e);
    });
    // return this.http.patch('urlapi/prestations/'+item.id, presta);
  }

  public delete(item: Prestation): Promise<any> {
    return this.itemsCollection.doc(item.id).delete().catch((e) => {
      console.log(e);
    });
    // return this.http.delete(`urlapi/prestations/${item.id}`);
  }

  getPrestation(id: string): Observable<Prestation> {
    return this.itemsCollection.doc<Prestation>(id).valueChanges();
    // return this.http.get(`urlaspi/prestations/${id}`);
  }
}
