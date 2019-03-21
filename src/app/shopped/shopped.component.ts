import { Component, OnInit } from '@angular/core';
import { AppService } from '../services/app.service';

import { AngularFireAuth } from '@angular/fire/auth';
import { AuthService } from '../services/auth.service';
import { AngularFirestore } from '@angular/fire/firestore';
import { Subscription } from 'rxjs';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-shopped',
  templateUrl: './shopped.component.html',
  styleUrls: ['./shopped.component.css']
})
export class ShoppedComponent implements OnInit {

  authSubscription:Subscription;

  constructor (
    private db:AngularFirestore,
    private afAuth:AngularFireAuth,
    private app:AppService,
    public auth:AuthService,
    public userService:UserService,
    ) {

    this.authSubscription = this.afAuth.authState.subscribe(user => {
      if(user){
        this.db.collection('users').get()
      }
    })
  }

  ngOnInit() {}

  showAddModal(){
    this.app.showAddModal();
  }

  ngOnDestroy(): void {
    this.authSubscription.unsubscribe();
  }
  

}
