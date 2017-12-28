import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AngularFireDatabaseModule } from 'angularfire2/database';

import { SharedModule } from '../../shared/shared.module';

import { TesteoService } from './testeo.service';

import { TesteoComponent } from '../testeo/testeo.component';
import { TesteoDetailComponent } from '../testeo-detail/testeo-detail.component';

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    ReactiveFormsModule,
    FormsModule,
    AngularFireDatabaseModule
  ],
  declarations: [
    TesteoComponent,
    TesteoDetailComponent
  ],
  providers: [
    TesteoService
  ]
})
export class TesteoModule { }
