import { Injectable } from '@angular/core';

import { User } from '../models';
import { AppService } from './app.service';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  user:User = {
    name: 'Leandro',
    budget: 54000
  };

  constructor() {}

  setUser(user:User){
    this.user = user
  }

  buy(amount:number){
    if (amount < this.user.budget) {
      this.user.budget = (this.user.budget - amount)
    } else {
      throw('you are exceding your budget');
    }
  }
}
