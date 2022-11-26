import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { UserService } from 'src/app/services/user.service';
import { Users } from 'src/app/interfaces/userInterface';

@Component({
  selector: 'app-edit-info',
  templateUrl: './edit-info.component.html',
  styleUrls: ['./edit-info.component.css']
})
export class EditInfoComponent implements OnInit {

  user:Users = {}
  constructor(private userService:UserService,private route: ActivatedRoute, private router:Router) { }
  id:string = this.route.snapshot.params['id']

  getSingleUser() {
    this.userService.getSingleUser(this.id).subscribe({
      next:(res:any)=> {
        this.user = res
      }
    })
  }

  editUser(user: Users){
    this.userService.editUser(this.id, user).subscribe({
      next:()=> {
        console.log(user)
        this.router.navigateByUrl('/')
      }
    })
  }



  ngOnInit(): void {
    this.getSingleUser()
  }

}
