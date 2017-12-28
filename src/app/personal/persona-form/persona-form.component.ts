import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { Persona } from '../shared/persona';

import { PersonaService } from '../shared/persona.service';

@Component({
  selector: 'persona-form',
  templateUrl: './persona-form.component.html',
  styleUrls: ['./persona-form.component.scss']
})
export class PersonaFormComponent {

  persona: Persona = new Persona();

  constructor(private personaSvc: PersonaService) { }
  createPersona() {
    this.personaSvc.createPersona(this.persona);
    this.persona = new Persona(); // reset persona
  }

}
