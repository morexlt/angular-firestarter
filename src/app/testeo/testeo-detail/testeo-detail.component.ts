import { Component, OnInit, Input} from '@angular/core';

import { Persona } from '../../personal/shared/persona';
import { PersonaService } from '../../personal/shared/persona.service';


@Component({
  selector: 'testeo-detail',
  templateUrl: './testeo-detail.component.html',
  styleUrls: ['./testeo-detail.component.scss']
})
export class TesteoDetailComponent implements OnInit {

  @Input() personaIn: string;
  persona: Persona;

  constructor(
  private personaSvc: PersonaService) {

  }

  ngOnInit() {
    let persona = this.personaSvc.getPersona(this.personaIn);
    persona.subscribe((persona)=>{
      this.persona = persona;
    });
  }

}
