import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {

  invalidAge:boolean = false
  invalidEmail:boolean = false
  token:any
  constructor(private authService:AuthService,private router:Router) { }

  // credentials --> myForm.value
  // localstorage
  signUp(credentials:any){
    this.authService.signUP(credentials).subscribe({
      next:(res:any)=>{
        console.log(res)
        this.token = res.token
        localStorage.setItem('token',this.token)
        this.router.navigateByUrl('/profile')
      },
      error:(httpError:any)=>{
        console.log(httpError)
        if(httpError.error.errors?.age){
          this.invalidAge = true
        }
        else if (httpError.error.code === 11000){
          this.invalidEmail = true
        }

      }
    })

  }

  changeEmail(){
    this.invalidEmail = false
  }
  changeAge(){
    this.invalidAge = false
  }

  ngOnInit(): void {
  }

}
