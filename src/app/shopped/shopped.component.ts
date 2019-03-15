import { Component, OnInit } from '@angular/core';
import { AppService } from '../services/app.service';

import { AngularFireAuth } from '@angular/fire/auth';
import { AuthService } from '../services/auth.service';
import { AngularFirestore } from '@angular/fire/firestore';

@Component({
  selector: 'app-shopped',
  templateUrl: './shopped.component.html',
  styleUrls: ['./shopped.component.css']
})
export class ShoppedComponent implements OnInit {

  constructor (
    private app:AppService,
    private afAuth:AngularFireAuth,
    private authService:AuthService,
    private db:AngularFirestore) {
    this.afAuth.authState.subscribe(user => {
      if(user){
        this.db.collection('users').get()
      }
    })
  }

  ngOnInit() {}

  onLogin(provider:string){
    return this.authService.login(provider);
  }

  onLogout(){
    return this.authService.logout();
  }
  
  showAddModal(){
    this.app.showAddModal();
  }

}
