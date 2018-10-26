import { Component, OnInit } from '@angular/core';
import { PrestationService } from '../../services/prestation.service';
import { Prestation } from 'src/app/shared/models/prestation.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-prestation',
  templateUrl: './add-prestation.component.html',
  styleUrls: ['./add-prestation.component.scss']
})
export class AddPrestationComponent implements OnInit {

  constructor(
    private ps: PrestationService,
    private router: Router
  ) { }

  ngOnInit() {
  }

  public add(item: Prestation): void {
    this.ps.add(item).then((data) => {
      this.router.navigate(['/prestations']);
    });

    // this.ps.add(item).subscribe((data) => {
    //   // Ajout de la gestion des erreurs
    //   // if (data)
    //   this.router.navigate(['/prestations']);
    // });

  }

}
