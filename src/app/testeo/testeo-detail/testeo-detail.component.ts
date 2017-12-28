import { Component, OnInit, Input} from '@angular/core';

import { Persona } from '../../personal/shared/persona';
import { PersonaService } from '../../personal/shared/persona.service';


@Component({
  selector: 'testeo-detail',
  templateUrl: './testeo-detail.component.html',
  styleUrls: ['./testeo-detail.component.scss']
})
export class TesteoDetailComponent implements OnInit {

  //@Input() personaIn: string;
  persona: Persona | null;
  aux: any;

  constructor(
  private personaSvc: PersonaService) {

  }

  ngOnInit() {
    //console.log(this.personaIn);
    this.aux = this.personaSvc.getPersona('-L1JbuwzF85NT7_oPf2x');
    console.log(this.aux);

    this.aux.subscribe((x:any) =>{
      //this.persona = x;
      console.log(x);
    });
    console.log(this.persona);
  }
  click(){
    this.aux.subscribe((x:any) =>{
      //this.persona = x;
      console.log(x);
    });
  }

}
