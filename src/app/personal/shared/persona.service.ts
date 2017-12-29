import { Injectable } from '@angular/core';

import { AngularFireDatabase, AngularFireList, AngularFireObject } from 'angularfire2/database';

import { Persona } from './persona';

import { Observable } from 'rxjs/Observable';
import { Observer } from 'rxjs/Observer';

@Injectable()
export class PersonaService {

  private basePath = '/persona';

  personalRef: AngularFireList<Persona>;
  personaRef:  AngularFireObject<Persona>;

  constructor(private db: AngularFireDatabase) {
    this.personalRef = db.list('/personas');
  }

  // Return an observable list of Personas
  getPersonasList(): Observable<Persona[]> {
    return this.personalRef.snapshotChanges().map((arr) => {
      return arr.map((snap) => Object.assign(snap.payload.val(), { $key: snap.key }) );
    });
  }

  // Return a single observable item
  getPersona(key: string): Observable<Persona> {
  //getPersona(key: string): any {
    /*
    const itemPath = `${this.basePath}/${key}`;
    const item = this.db.object(itemPath).valueChanges() as Observable<Persona | null>;
    console.log('Retorne: ######');
    console.log(item);
    console.log('######');
    item.subscribe(x=>{
      console.log(x);
    })
    */
    console.log(key);
    return Observable.create((observer: Observer<Persona>)=>{
      this.db.database.ref('personas/' + key).on('value', function(snapshot: any) {
          observer.next(snapshot.val());
      });
    });
  }

  // Create a brand new item
  createPersona(item: Persona): void {
    this.personalRef.push(item);
  }

  // Update an exisiting item
  updatePersona(key: string, value: any): void {
    this.personalRef.update(key, value);
  }

  // Deletes a single item
  deletePersona(key: string): void {
    this.personalRef.remove(key);
  }

  // Deletes the entire list of items
  deleteAll(): void {
    this.personalRef.remove();
  }

  // Default error handling for all actions
  private handleError(error: Error) {
    console.error(error);
  }

}
