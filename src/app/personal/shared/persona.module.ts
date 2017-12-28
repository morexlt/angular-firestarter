import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AngularFireDatabaseModule } from 'angularfire2/database';

import { SharedModule } from '../../shared/shared.module';

import { PersonaService } from './persona.service';

import { PersonaListComponent } from '../persona-list/persona-list.component';
import { PersonaFormComponent } from '../persona-form/persona-form.component';
import { PersonaDetailComponent } from '../persona-detail/persona-detail.component';


@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    ReactiveFormsModule,
    FormsModule,
    AngularFireDatabaseModule
  ],
  declarations: [
    PersonaListComponent,
    PersonaFormComponent,
    PersonaDetailComponent
  ],
  providers: [
    PersonaService
  ]
})
export class PersonaModule { }
