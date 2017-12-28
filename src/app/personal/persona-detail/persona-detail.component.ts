import { Component, Input } from '@angular/core';
import { PersonaService } from '../shared/persona.service';
import { Persona } from '../shared/persona';

@Component({
  selector: 'persona-detail',
  templateUrl: './persona-detail.component.html',
  styleUrls: ['./persona-detail.component.scss']
})
export class PersonaDetailComponent {

  @Input() persona: Persona;

  constructor(private personaSvc: PersonaService) { }

  updateTimeStamp() {
    const date = new Date().getTime();
    this.personaSvc.updatePersona(this.persona.$key, { });
  }

  updateActive(value: boolean) {
    this.personaSvc.updatePersona(this.persona.$key, { });
  }

  deletePersona() {
    this.personaSvc.deletePersona(this.persona.$key);
  }

}
