import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreDocument } from '@angular/fire/firestore';
import { Product } from '../models';
import { Observable } from 'rxjs';
import { map, tap } from 'rxjs/operators'

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  products:AngularFirestoreDocument<any>;

  constructor(private db:AngularFirestore) {}

  getProducts(): Observable<any[]>{
    return this.db.collection('products', ref => ref.orderBy('name')).valueChanges()
  }

  add(product:Product){
    return this.db.collection('products').add(product);
  }

  buy(productId:number){
    this.db.collection('/products', ref => ref.where('id', '==', productId))
      .get()
      .subscribe( querySnapshot => {
        querySnapshot.forEach(doc => {
          doc.ref.update({
            isBought: true
          })
        })
      })
  }

  remove(productId:string){
    this.db.collection('/products', ref => ref.where('id', '==', productId))
      .get()
      .subscribe( querySnapshot => querySnapshot.forEach(doc => doc.ref.delete()))
  }

  edit(productId:number, newValues:object){
    this.db.collection('/products', ref => ref.where('id', '==', productId))
      .get()
      .subscribe( querySnapshot => {
        querySnapshot.forEach(doc => {
          doc.ref.update({...newValues})
        })
      })
  }
}
