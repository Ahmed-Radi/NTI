import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';
import { UsersService } from 'src/app/services/users.service';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {

  invalidEmail:boolean = false
  invalidAge:boolean = false
  Message:string = ''
  token:any
  file:any
  constructor(private authService:AuthService, private router:Router, private usersService:UsersService) { }

  handleUpload(event:any) {
    // console.log(event)
    this.file = event.target.files
    // console.log("image",this.file)
  }

  uploadFile() {
    if(this.file) {
      const myData = new FormData()
      for(let i = 0 ; i < this.file.length; i++) {
        myData.append('avatar',this.file[0])
      }
      this.usersService.addImage(myData).subscribe(()=>{})
    }
  }

  signUp(credentials:any) {
    this.authService.signUp(credentials).subscribe({
      next: (res:any) => {
        console.log(res)
        this.token = res.token;
        localStorage.setItem('token', this.token)
        this.uploadFile()
        this.router.navigateByUrl('/profile')
      }, error: (HttpError) => {
        console.log(HttpError)
        if (HttpError.error.errors?.age) {
          this.Message = HttpError.error.message.replace('User Validation Failed: Age: ', '')
          this.invalidAge = true
        } else if (HttpError.error.code === 11000) {
          this.invalidEmail = true
        }
      }
    })
  }

  Email() {
    this.invalidEmail = false;
  }
  Age() {
    this.invalidAge = false;
  }

  ngOnInit(): void {
  }

}
