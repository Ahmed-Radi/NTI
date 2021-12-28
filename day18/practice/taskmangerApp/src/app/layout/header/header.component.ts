import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(private authService:AuthService) { }
  // token:any = this.authService.getToken()
  // hidde: boolean = true;

  // hide signup and login when user login -> Not work
  // getAuth(){
  //     if (this.token) {
  //       this.hidde = false;
  //     }
  // }


  ngOnInit(): void {
    // this.getAuth()
  }

}
