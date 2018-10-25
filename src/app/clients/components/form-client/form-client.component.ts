import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { ClientState } from 'src/app/shared/enums/client-state.enum';
import { Client } from 'src/app/shared/models/client.model';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-form-client',
  templateUrl: './form-client.component.html',
  styleUrls: ['./form-client.component.scss']
})
export class FormClientComponent implements OnInit {
  public states = Object.values(ClientState);
  public init = new Client();
  public form: FormGroup;
  @Output() nItem: EventEmitter<Client> = new EventEmitter();

  constructor(
    private fb: FormBuilder
  ) { }

  ngOnInit() {
    this.createForm();
  }

  private createForm() {
    this.form = this.fb.group({
      id: [
        this.init.id,
        Validators.required
      ],
      nom: [
        this.init.nom,
        Validators.required
      ],
      adresse: [
        this.init.adresse
      ],
      codePostal: [
        this.init.codePostal
      ],
      ville: [
        this.init.ville
      ],
      tjm_ht: [
        this.init.tjm_ht
      ],
      state: [
        this.init.state
      ]
    });
  }

  public onSubmit() {
    this.nItem.emit(this.form.value);
  }

}
