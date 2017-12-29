import { Component, OnInit } from '@angular/core';

import { TesteoService } from '../shared/testeo.service';
import { PersonaService } from '../../personal/shared/persona.service';

import { Testeo } from '../shared/testeo';
import { Persona } from '../../personal/shared/persona';

import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'testeo',
  templateUrl: './testeo.component.html',
  styleUrls: ['./testeo.component.scss']
})
export class TesteoComponent implements OnInit {

  testeos: Observable<Testeo[]>;
  personas: Observable<Persona[]>;
  showSpinner = true;

  testeo: Testeo = new Testeo();

  constructor(
    private testeoSvc: TesteoService,
    private personaSvc: PersonaService,
  ) {
    this.testeos = this.testeoSvc.getTesteosList();
    this.personas = this.personaSvc.getPersonasList();
    this.personas.subscribe((x)=>{
      console.log(x);
    })

  }

  ngOnInit() {
    this.testeos.subscribe((x) => {
      this.showSpinner = false;
    });
  }

  deleteTesteos() {
    this.testeoSvc.deleteAll();
  }

  createTesteo() {
    this.testeoSvc.createTesteo(this.testeo);
    this.testeo = new Testeo(); // reset testeo
  }

}
