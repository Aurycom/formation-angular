import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-add-row',
  templateUrl: './add-row.component.html',
  styleUrls: ['./add-row.component.scss']
})
export class AddRowComponent implements OnInit {
  @Input() title: string;
  constructor() { }

  ngOnInit() {
  }

}
