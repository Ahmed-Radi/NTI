import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/user.service';
import { Users } from '../../interfaces/userInterface'

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {

  users: Users[] = []
  constructor(private testService:UserService) { }

  getUsers(){
    this.users = this.testService.getUsers() // getUsers() -> come from user.service
  }

  ngOnInit(): void {
    this.getUsers();
  }

}
