import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Posts } from 'src/app/interfaces/postsInterface';
import { PostsService } from 'src/app/services/posts.service';

@Component({
  selector: 'app-single-post',
  templateUrl: './single-post.component.html',
  styleUrls: ['./single-post.component.css']
})
export class SinglePostComponent implements OnInit {

  constructor(private postService:PostsService,private router:ActivatedRoute) { }
  id: string = this.router.snapshot.params['id']

  post: Posts = {}
  getSinglePost() {
    this.postService.getSinglePost(this.id).subscribe({
      next: (res:any) => {
        this.post = res
      }, error: (httpError) => {
        console.log(httpError)
      }
    })
  }

  ngOnInit(): void {
    this.getSinglePost()
  }

}
