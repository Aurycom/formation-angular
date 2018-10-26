import { ClientI } from '../interfaces/client-i';
import { ClientState } from '../enums/client-state.enum';
import { RouteI } from '../interfaces/route-i';

export class RouteM implements RouteI {
  route: string;
  label: string;

  constructor(fields?: Partial<RouteM>) {
    if (fields) {
      Object.assign(this, fields);
    }
  }
}
