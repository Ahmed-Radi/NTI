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

  constructor(private postService:PostsService,private route:ActivatedRoute) { }
  // http://localhost:4200/singlePost/62
  id:string = this.route.snapshot.params['id']
  posts:Posts = {}
  getSinglePost(){
    console.log(this.id)
    this.postService.getSinglePost(this.id).subscribe({
      next:(res:any)=>{
        console.log(res)
        this.posts = res
      }
    })
  }
  ngOnInit(): void {
    this.getSinglePost()
  }

}
