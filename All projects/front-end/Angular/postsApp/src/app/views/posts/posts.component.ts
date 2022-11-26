import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Posts } from 'src/app/interfaces/postsInterface';
import { PostsService } from './../../services/posts.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit {

  posts: Posts[] = []
  constructor(private postService:PostsService, private toastr: ToastrService){}
  getPosts(){
    this.postService.getPosts().subscribe(
      {
        next: (res:any) => {
          // console.log(res)
          this.posts = res
        },
        error: (httpError:any) => {
          console.log(httpError)
        }
      }
    )
  }

  addPost(post:any) {
    this.postService.addPost(post).subscribe({
      next: () => {
        this.posts.splice(0,0,post)
      }
    })
  }

  deletePost(postId:any, index:number) { // fro html
    this.postService.deletePost(postId).subscribe({
      next:() => {
        this.posts.splice(index,1)
      }
    })
  }

  showSuccess() {
    this.toastr.success('Done!', 'Deleted Success!');
  }

  ngOnInit(): void {
    this.getPosts()
  }

}
