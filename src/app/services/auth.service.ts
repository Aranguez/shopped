import { Injectable } from '@angular/core';

import { AngularFireAuth } from '@angular/fire/auth';
import * as firebase from 'firebase/app';
import { User } from '../models';
import { AngularFirestore } from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(
    private auth:AngularFireAuth,
    private db:AngularFirestore) { }

  addUser(user:User){
    this.db.collection('users').add(user);
  }

  logout(){
    this.auth.authState.subscribe(state => {
      state.delete().then(() => {
        this.auth.auth.signOut();
      })
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
          // const newUser:User = {
          //   name: result.
          // }

          //this.addUser(user)
        }).catch(function(error) {
          // Handle Errors here.
          const errorCode = error.code;
          const errorMessage = error.message;
          console.error(errorMessage);
        });
      }
    })

    
  }
}
