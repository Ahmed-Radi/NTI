import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  token:any
  invalidLogin:boolean = false
  constructor(private authService:AuthService,private router:Router) { }
  login(credentials:any){
    this.authService.login(credentials).subscribe({
      next:(res:any)=>{
       this.token = res.token
       localStorage.setItem('token',this.token)
        this.router.navigateByUrl('/profile')
        console.log(res)
      },
      error:(httpError:any)=>{
        console.log(httpError)
        this.invalidLogin = true
      }
    })

  }
  changeData(){
    this.invalidLogin = false
  }

  ngOnInit(): void {
  }

}
