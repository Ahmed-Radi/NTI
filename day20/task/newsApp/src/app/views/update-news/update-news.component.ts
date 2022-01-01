import { NewsService } from 'src/app/services/news.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { News } from 'src/app/interfaces/newsInterface';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-update-news',
  templateUrl: './update-news.component.html',
  styleUrls: ['./update-news.component.css']
})
export class UpdateNewsComponent implements OnInit {

  constructor(private fb: FormBuilder,private newsService:NewsService, private route:ActivatedRoute,private router:Router) {  }
  id:string = this.route.snapshot.params['id']
  news:News = {}
  file:any

  getSingleNews() {
    this.newsService.getSingleNews(this.id).subscribe({
      next: (res:any) => {
        this.news = res
        console.log(this.news)
      }
    })
  }

  addImageHandle(event:any) {
    this.file = event.target.files
  }

  uploadFile() {
    if (this.file) {
      const myData = new FormData()
      for(let i=0; i<this.file.length; i++) {
        myData.append('image',this.file[i])
      }
      this.newsService.addImage(this.id, myData).subscribe(() => {})
    }
  }

  editNews (news:News) {
    this.newsService.editNews(this.id, news).subscribe({
      next: () => {
        // console.log(news)
        this.uploadFile()
        this.router.navigateByUrl('/news')
      }
    })
  }

  editNewsForm = this.fb.group({
    title: ['',[Validators.required, Validators.minLength(3)]],
    description: ['',[Validators.required, Validators.minLength(3)]],
    // image: ['',[Validators.required]]
  })

  get newsValue() {
    return this.editNewsForm.controls
  }

  ngOnInit(): void {
    this.getSingleNews()
  }

}
