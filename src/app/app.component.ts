import { Component } from '@angular/core';
import { USER_DATA } from './data/mocks';
import { User } from './model/user';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  users : User[];

  ngOnInit(){
    this.users = USER_DATA;
    console.log(this.users);
  }
}
