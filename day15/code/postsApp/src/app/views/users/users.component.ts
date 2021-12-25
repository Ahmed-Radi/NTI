import { Component, OnInit } from '@angular/core';
import { Users } from 'src/app/interfaces/userInterface';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {

  // users:Users[] = [
  //   {name:'Omar',age:30},
  //   {name:'Amr',age:40},
  //   {name:'Mahmoud',age:20}
  // ]
  users:Users[] = []
  constructor(private userService:UserService) { }

  getData(){
    this.users = this.userService.getUsers()
  }
  ngOnInit(): void {
    this.getData()
  }

}
