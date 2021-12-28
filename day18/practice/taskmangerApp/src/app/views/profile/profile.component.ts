import { Component, OnInit } from '@angular/core';
import { Users } from 'src/app/interface/userInterface';
import { AuthService } from 'src/app/services/auth.service';
import { UsersService } from 'src/app/services/users.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  user: Users = {};
  constructor(private usersService: UsersService) { }

  profile() {
    this.usersService.profile().subscribe({
      next:(res:any)=> {
        console.log(res.token)
        this.user = res
        console.log(this.user.name)
      }
    })
  }
  ngOnInit(): void {
    this.profile()
  }

}
