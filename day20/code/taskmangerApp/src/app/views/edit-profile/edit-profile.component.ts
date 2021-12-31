import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Users } from 'src/app/interfaces/userInterface';
import { UsersService } from 'src/app/services/users.service';

@Component({
  selector: 'app-edit-profile',
  templateUrl: './edit-profile.component.html',
  styleUrls: ['./edit-profile.component.css']
})
export class EditProfileComponent implements OnInit {

  constructor(private userService:UsersService,private router:Router) { }

  user:Users = {}
  file:any
  getProfile(){
    this.userService.getProfile().subscribe({
      next:(res:any)=>{
        console.log(res)
        this.user = res
      }
    })
  }

//   editProfile(data:Users){

    
//     this.userService.updateProfile(data).subscribe({

//       next: (req:any)=>{

//         this.uploadFile();
//         this.router.navigateByUrl('/profile')
//       },
//       error:(error:any)=>{

//         console.log(error)
//       }
//     })


//   }

//   uploadFile(){
//     if(this.file){
//       const fileForm =new FormData();
//       fileForm.append('avatar',this.file)
//       this.userService.addImage(fileForm).subscribe({
//         next:async (req:any)=>{

// console.log(req)
//         },
//         error:(error:any)=>{

//           console.log(error)
//         }
//       });
//     }
//   }

  // handleUpload(event:any){
  //   console.log(event)
  //   this.file =event.target.files[0]
  // }
  handleUpload(event:any){
    console.log(event)
    // array
    this.file = event.target.files
  }

  uploadFile(){
    if(this.file){
      const myData = new FormData()
      for(let i=0;i<this.file.length;i++){  // 3  flowers.jpg test.png food.jpeg
        myData.append('avatar',this.file[i])
      }
      this.userService.addImage(myData).subscribe(()=>{}) // post (profile/avatar)
    }
  }

  editProfile(user:Users){
    this.userService.updateProfile(user).subscribe({
      next:()=>{
        this.uploadFile()
        this.router.navigateByUrl('/profile')
      }
    })
  }

  ngOnInit(): void {
    this.getProfile()
  }

}
