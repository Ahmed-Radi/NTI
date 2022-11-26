import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Posts } from 'src/app/interfaces/postsInterface';
import { PostsService } from 'src/app/services/posts.service';

@Component({
  selector: 'app-edit-post',
  templateUrl: './edit-post.component.html',
  styleUrls: ['./edit-post.component.css']
})
export class EditPostComponent implements OnInit {

  post:Posts = {}
  constructor(private postsService:PostsService, private route:ActivatedRoute, private router:Router) {  }
  id:string = this.route.snapshot.params['id']
  getSinglePost() {
    this.postsService.getSinglePost(this.id).subscribe({
      next:(res:any) => {
        this.post = res;
      }
    })
  }

  editSinglePost(post: Posts) {
    this.postsService.editSinglePost(this.id, post).subscribe({
      next:() => {
        console.log(post)
        this.router.navigateByUrl('/posts')
      }
    })
  }
  ngOnInit(): void {
    this.getSinglePost()
  }

}
