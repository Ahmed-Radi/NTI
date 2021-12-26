import { Component, OnInit } from '@angular/core';
import { Users } from 'src/app/interfaces/userInterface';
import { UserService } from 'src/app/services/user.service';


@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {

  users:Users[] = []
  constructor(private testService:UserService) { }

  getUsers(){
    this.users = this.testService.getUsers()
  }
  ngOnInit(): void {
    this.getUsers()
  }

}
