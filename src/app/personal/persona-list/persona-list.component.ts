import { Component, OnInit } from '@angular/core';

import { PersonaService } from '../shared/persona.service';

import { Persona } from '../shared/persona';

import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'persona-list',
  templateUrl: './persona-list.component.html',
  styleUrls: ['./persona-list.component.scss']
})
export class PersonaListComponent implements OnInit {

  personas: Observable<Persona[]>;
  showSpinner = true;

  constructor(private itemService: PersonaService) {
    this.personas = this.itemService.getPersonasList();
    console.log(this.personas);
    this.personas.subscribe((personas) => {
      console.log(personas);
    });
  }

  ngOnInit() {
    this.personas.subscribe((x) => {
      this.showSpinner = false;
    });
  }

  deletePersonas() {
    this.itemService.deleteAll();
  }

}
