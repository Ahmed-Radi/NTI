import { Component, OnInit } from '@angular/core';
import { Users } from 'src/app/interfaces/userInterface';
import { UsersService } from 'src/app/services/users.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  user:Users = {}
  constructor(private usersService:UsersService) { }

  profile () {
    this.usersService.profile().subscribe({
      next: (res:any) => {
        this.user = res
      }, error: (httpError: any) => {
        console.log(httpError)
      }
    })
  }
  ngOnInit(): void {
    this.profile()
  }

}
