import { Injectable } from '@angular/core';

import { AngularFireAuth } from '@angular/fire/auth';
import { AngularFirestore } from '@angular/fire/firestore';
import * as firebase from 'firebase/app';

import { User } from '../models';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(
    private auth:AngularFireAuth,
    private db:AngularFirestore) { }

  getUser(){
    //tomo al usuario
  }

  addUser(user:User){
    this.db.collection('users').add(user);
  }

  logout(){
    this.auth.authState.subscribe(() => {
      this.auth.auth.signOut(); //TODO: cambiar nombre de servicio
    })
  }

  login(provider:string){
    let authProvider:any;

    switch (provider) {
      case 'facebook':
        authProvider = new firebase.auth.FacebookAuthProvider();
        break;
      case 'google':
        authProvider = new firebase.auth.GoogleAuthProvider();
        break;
    }

    this.auth.authState.subscribe(user => {
      if (!user) {
        firebase.auth().signInWithRedirect(authProvider).then(result =>  {
          console.log(result)
        }).catch(error => {
          console.error(error);
        });
      }
    })

    
  }
}
