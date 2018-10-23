import { Component, OnInit, Input } from '@angular/core';
import { State } from 'src/app/shared/enums/state.enum';
import { Prestation } from 'src/app/shared/models/prestation.model';
import { PrestationService } from '../../services/prestation.service';

@Component({
  selector: 'app-prestation',
  templateUrl: './prestation.component.html',
  styleUrls: ['./prestation.component.scss']
})
export class PrestationComponent implements OnInit {
  public states = Object.values(State);
  // Bind item du contenu parent avec @Input()
  @Input() public item: Prestation;
  constructor(
    private ps: PrestationService
  ) {}

  ngOnInit() {
    // console.log(this.item);
  }

  public changeState(event): void {
    // console.log(event.target.value);
    const state = event.target.value;
    this.ps.update(this.item, state);
  }

}
