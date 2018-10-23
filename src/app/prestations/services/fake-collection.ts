import { Prestation } from 'src/app/shared/models/prestation.model';
import { State } from 'src/app/shared/enums/state.enum';

export const fakeCollection: Prestation[] = [
  new Prestation({
    id: 'lorem',
    typePresta: 'formation',
    client: 'AAAA',
    nbJours: 2,
    tjmHt: 500
  }),
  new Prestation({
    id: 'ipsum',
    typePresta: 'coaching',
    client: 'URSSAF',
    nbJours: 20,
    tjmHt: 1000
  })
];
