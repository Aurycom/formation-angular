import { ClientI } from '../interfaces/client-i';
import { ClientState } from '../enums/client-state.enum';

export class Client implements ClientI {
  id: number;
  nom: string;
  adresse: string;
  codePostal: number;
  ville: string;
  tjm_ht = 500;
  state = ClientState.ACTIF;

  constructor(fields?: Partial<Client>) {
    if (fields) {
      Object.assign(this, fields);
    }
  }
}
