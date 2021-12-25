import { Injectable } from '@angular/core';
import { Users } from '../interfaces/userInterface';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  users: Users[] = [
    {name:'Omar',age:30},
    {name:'Amr',age:40},
    {name:'Mahmoud',age:20}
  ];

  getUsers(){
    return this.users
  }
  constructor() { }
}
