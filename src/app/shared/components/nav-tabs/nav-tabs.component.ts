import { Component, OnInit, Input } from '@angular/core';
import { RouteM } from '../../models/route.model';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-nav-tabs',
  templateUrl: './nav-tabs.component.html',
  styleUrls: ['./nav-tabs.component.scss']
})
export class NavTabsComponent implements OnInit {
  @Input() routes: RouteM[];

  constructor(
    private route: ActivatedRoute
  ) { }

  ngOnInit() {

  }

}
