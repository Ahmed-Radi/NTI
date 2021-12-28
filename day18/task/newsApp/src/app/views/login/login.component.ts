import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  invalidEmailOrPassword: boolean = false
  constructor(private authService: AuthService, private router:Router) { }

  Login (credentials:any) {
    this.authService.login(credentials).subscribe({
      next: (res:any) => {
        console.log(res)
        this.router.navigateByUrl('/profile')
        localStorage.setItem('token', res.toke)
        this.invalidEmailOrPassword = false
      }, error: (httpError:any) => {
        this.invalidEmailOrPassword = true
        console.log(httpError)
      }
    })
  }

  touchInput() {
    this.invalidEmailOrPassword = false
  }
  ngOnInit(): void {
  }

}
