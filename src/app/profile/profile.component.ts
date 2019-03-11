import { Component, OnInit } from '@angular/core';
import { User } from '../models';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  user:User = {
    name: 'Leandro',
    budget: 50000
  };

  constructor() { }

  ngOnInit() {
  }

}
