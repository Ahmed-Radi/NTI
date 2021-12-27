import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {


  invalidEmail:boolean = false;
  invalidAge:boolean = false;
  invalidPhone:boolean = false;
  constructor(private authService: AuthService, private router: Router) { }

  signUP(credentials:any) {
    this.authService.signUp(credentials).subscribe({
      next: (res:any) => {
        console.log(res)
        localStorage.setItem('token', res.token)
        this.router.navigateByUrl('/profile')
      },  error: (httpError:any) => {
        console.log(httpError)
        if (httpError.error.errors?.age) {
          this.invalidAge = true
        } else if (httpError.error.errors?.phone) {
          this.invalidPhone = true;
        } else if (httpError.error.code === 11000) {
          this.invalidEmail = true;
        }

      }
    })
  }

  Age() {
    this.invalidEmail = false;
  }
  Phone() {
    this.invalidPhone = false;
  }
  Email () {
    this.invalidEmail = false;
  }
  ngOnInit(): void {
  }

}
