import { Component, OnInit } from '@angular/core';
import { Users } from '../../interfaces/userInterface'
@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {

  constructor() { }

  userInfo: Users[] = [
    {name: 'ahmed', age: 20},
    {name: 'mo', age: 40},
    {name: 'ali', age: 23},
    {name: 'hady', age: 22},
  ]
  ngOnInit(): void {
  }

}
