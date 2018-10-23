import { Directive, Input, OnInit, HostBinding, OnChanges } from '@angular/core';
import { State } from '../enums/state.enum';

@Directive({
  selector: '[appState]'
})
export class StateDirective implements OnChanges {
  @Input() appState: State;
  @HostBinding('class') nomClass: string;
  constructor() {

  }

  // Mettre un type primitif dans le input car objet par reference
  ngOnChanges() {
    console.log(this.appState);
    this.nomClass = this.formatClass(this.appState);
  }

  private formatClass(state: State): string {
    return `state-${state.normalize('NFD').replace(/[\u0300-\u036f\s]/g, '').toLocaleLowerCase()}`;
  }
  // remove all accents of state
  // remove all spaces of state
  // concat state- with result
  // bind result to property class of td host

}
