import { Component, OnInit } from '@angular/core';
import { Posts } from 'src/app/interfaces/postsInterface';
import { PostsService } from 'src/app/services/posts.service';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit {

  posts:Posts[] = []
  // x:any
  constructor(private postService:PostsService) { }

  // log(x:any){
  //   console.log(this.x)
  //   console.log(x)
  // }
  getPosts(){
    this.postService.getPosts().subscribe(
      {
        // success
        next:(res:any) =>{
          console.log(res)
          this.posts = res
        },
        // failure
        error:(httpError:any)=>{
          console.log(httpError)
        }
      }
    )
  }

  ngOnInit(): void {
    this.getPosts()
  }

}
