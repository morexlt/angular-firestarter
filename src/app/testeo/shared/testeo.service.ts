import { Injectable } from '@angular/core';

import { AngularFireDatabase, AngularFireList, AngularFireObject } from 'angularfire2/database';

import { Testeo } from './testeo';

import { Observable } from 'rxjs/Observable';

@Injectable()
export class TesteoService {

  private basePath = '/testeo';

  testeoRef: AngularFireList<Testeo>;
  testeoef:  AngularFireObject<Testeo>;

  testeos: any;
  final_data: any;

  constructor(private db: AngularFireDatabase) {
    this.testeoRef = db.list('/testeo');
  }

  // Return an observable list of Testeos
  getTesteosList(): Observable<Testeo[]> {
    return this.testeoRef.snapshotChanges().map((arr) => {
      return arr.map((snap) => Object.assign(snap.payload.val(), { $key: snap.key }) );
    });

    /*
    this.db.list('/testeo', {}).subscribe(res => {
      this.testeos = res;
      this.final_data = this.testeos.map(function (key) {
        return this.db.object('/personal/' +$,{key:$key});
      }); }
    );

    */

  }

  // Return a single observable item
  getTesteo(key: string): Observable<Testeo | null> {
    const itemPath = `${this.basePath}/${key}`;
    const item = this.db.object(itemPath).valueChanges() as Observable<Testeo | null>;
    return item;
  }

  // Create a brand new item
  createTesteo(item: Testeo): void {
    this.testeoRef.push(item);
  }

  // Update an exisiting item
  updateTesteo(key: string, value: any): void {
    this.testeoRef.update(key, value);
  }

  // Deletes a single item
  deleteTesteo(key: string): void {
    this.testeoRef.remove(key);
  }

  // Deletes the entire list of items
  deleteAll(): void {
    this.testeoRef.remove();
  }

  // Default error handling for all actions
  private handleError(error: Error) {
    console.error(error);
  }

}
