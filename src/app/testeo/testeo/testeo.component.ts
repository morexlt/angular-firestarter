import { Component, OnInit } from '@angular/core';

import { TesteoService } from '../shared/testeo.service';

import { Testeo } from '../shared/testeo';

import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'testeo',
  templateUrl: './testeo.component.html',
  styleUrls: ['./testeo.component.scss']
})
export class TesteoComponent implements OnInit {

  testeos: Observable<Testeo[]>;
  showSpinner = true;

  testeo: Testeo = new Testeo();

  constructor(
    private testeoSvc: TesteoService
  ) {
    this.testeos = this.testeoSvc.getTesteosList();
    console.log(this.testeos);
    this.testeos.subscribe((testeos) => {
      console.log(testeos);
    });


    

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
