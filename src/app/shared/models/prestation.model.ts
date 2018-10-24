import { PrestationI } from '../interfaces/prestation-i';
import {State} from '../enums/state.enum';

export class Prestation implements PrestationI {
  // : signifie le type
  // = affectation de valeur par défaut
  id: string;
  typePresta: string;
  client: string;
  nbJours = 0;
  tjmHt = 0;
  tauxTva = 20;
  state = State.OPTION;

  constructor(fields?: Partial<Prestation>) {
    if (fields) {
      Object.assign(this, fields);
    }
  }

  totalHT() {
    // console.log('total HT called');
    return this.tjmHt * this.nbJours;
  }

  totalTTC(tva?) {
    // console.log('total TTC called');
    if (!tva) {
      return this.totalHT() * ( 1 + this.tauxTva / 100);
    }
    if (tva <= 0) {
      return this.totalHT();
    }
    return this.totalHT() * (1 + tva / 100);
  }
}
