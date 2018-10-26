import { Client } from 'src/app/shared/models/client.model';

export const fakeCollectionClients: Client[] = [
  new Client({
    id: '1',
    nom: 'Lorem',
    adresse: 'La défense',
    codePostal: 92100,
    ville: 'Puteaux'
  }),
  new Client({
    id: '2',
    nom: 'Ipsum',
    adresse: 'Rue de la bas',
    codePostal: 31000,
    ville: 'Toulouse'
  })
];
