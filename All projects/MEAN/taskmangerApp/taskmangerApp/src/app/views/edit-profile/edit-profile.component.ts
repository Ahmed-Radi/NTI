import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Users } from 'src/app/interface/userInterface';
import { UsersService } from 'src/app/services/users.service';

@Component({
  selector: 'app-edit-profile',
  templateUrl: './edit-profile.component.html',
  styleUrls: ['./edit-profile.component.css']
})
export class EditProfileComponent implements OnInit {

  user:Users = {}
  file:any
  constructor(private usersService:UsersService, private router:Router) { }

  profile() {
    this.usersService.profile().subscribe({
      next: (res:any) => {
        this.user = res
        // console.log(this.user)
      }
    })
  }

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

  updateProfile(user:Users) {
    this.usersService.updateProfile(user).subscribe({
      next: () => {
        this.uploadFile()
        this.router.navigateByUrl('/profile')
      }
    })
  }

  ngOnInit(): void {
    this.profile()
  }

}
