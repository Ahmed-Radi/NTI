import { UsersService } from 'src/app/services/users.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(private usersService:UsersService) { }

  get getToken () {
    let token = this.usersService.getToken()
    if(token) {
      return true
    }
    return false
  }

  logout () {
    this.usersService.logout().subscribe({
      next:() => {
        localStorage.removeItem('token')
      }
    })
  }
  ngOnInit(): void {
  }

}
