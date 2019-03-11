import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreDocument } from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  // products:AngularFirestoreDocument<any>;

  constructor(private db:AngularFirestore) {}

  getData(){
    this.db.collection('products').valueChanges().subscribe(data => console.log(data))
  }
}
