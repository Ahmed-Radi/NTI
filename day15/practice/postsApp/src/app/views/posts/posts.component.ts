import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Posts } from 'src/app/interfaces/postsInterface';
import { PostsService } from './../../services/posts.service';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit {

  posts: Posts[] = []
  constructor(private postService:PostsService){}
  getPosts(){
    this.postService.getPosts().subscribe(
      {
        next: (res:any) => {
          console.log(res)
          this.posts = res
        },
        error: (httpError:any) => {
          console.log(httpError)
        }
      }
    )
  }
  ngOnInit(): void {
    this.getPosts()
  }

}
