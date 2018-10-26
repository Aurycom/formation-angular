import { Component, OnInit } from '@angular/core';
import { PrestationResolverService } from '../../services/prestation-resolver.service';
import { Router, ActivatedRoute } from '@angular/router';
import { Prestation } from 'src/app/shared/models/prestation.model';
import { PrestationService } from '../../services/prestation.service';
import { isNgTemplate } from '@angular/compiler';

@Component({
  selector: 'app-edit-prestation',
  templateUrl: './edit-prestation.component.html',
  styleUrls: ['./edit-prestation.component.scss']
})
export class EditPrestationComponent implements OnInit {
  public presta: Prestation;

  constructor(
    private activatedRoute: ActivatedRoute,
    private ps: PrestationService,
    private router: Router
  ) {}

  ngOnInit() {
    this.activatedRoute.data.subscribe((data: { item: Prestation }) => {
      this.presta = data.item;
    });
  }

  public update(presta: Prestation): void {
    presta.id = this.presta.id;
    this.ps.update(presta).then((data) => {
      this.router.navigate(['/prestations']);
    });
  }
}
