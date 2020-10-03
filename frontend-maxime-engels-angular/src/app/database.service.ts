import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root'
})
export class DatabaseService {

constructor(public db: AngularFirestore) {}

  getSpeakers() {
    return new Promise<any>((resolve, reject) => {
      this.db.collection('speakers').valueChanges()
      .subscribe(snapshots => {
        resolve(snapshots);
      });
    });
  }

  getAbout() {
    return new Promise<any>((resolve, reject) => {
      this.db.collection('about').valueChanges()
      .subscribe(snapshots => {
        resolve(snapshots);
      });
    });
  }

  getTickets() {
    return new Promise<any>((resolve, reject) => {
      this.db.collection('tickets').valueChanges()
      .subscribe(snapshots => {
        resolve(snapshots);
      });
    });
  }

}
