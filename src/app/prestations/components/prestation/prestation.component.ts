import { Component, OnInit, Input } from '@angular/core';
import { State } from 'src/app/shared/enums/state.enum';
import { Prestation } from 'src/app/shared/models/prestation.model';
import { PrestationService } from '../../services/prestation.service';
import { faTrashAlt, faEdit } from '@fortawesome/free-solid-svg-icons';
import { Router } from '@angular/router';

@Component({
  selector: 'app-prestation',
  templateUrl: './prestation.component.html',
  styleUrls: ['./prestation.component.scss']
})
export class PrestationComponent implements OnInit {
  public states = Object.values(State);
  public faTrashAlt = faTrashAlt;
  public faEdit = faEdit;
  // Bind item du contenu parent avec @Input()
  @Input() public item: Prestation;
  constructor(
    private ps: PrestationService,
    private router: Router
  ) {}

  ngOnInit() {
    // console.log(this.item);
  }

  public changeState(event): void {
    // console.log(event.target.value);
    const state = event.target.value;
    this.ps.update(this.item, state).then((data) => {
      this.item.state = state;
    });

    // this.ps.update(this.item, state).subscribe((data) => {
    // if data ... traiter les retours du serveur
    //   this.item.state = state;
    // });
  }

  public delete() {
    this.ps.delete(this.item).then((data) => {
      // Afficher un message d'erreur si retour KO
    });

    // this.ps.delete(this.item).subscribe((data) => {
    //   // Afficher un message d'erreur si retour KO
    //   // if data ... traiter les retours serveurs
    // });
  }

  public edit() {
    this.router.navigate(['prestations/edit', this.item.id]);
  }

  public detail() {
    this.ps.presta$.next(this.item);
  }

}
