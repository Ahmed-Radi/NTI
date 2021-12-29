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

  getSingleNews() {
    this.newsService.getSingleNews(this.id).subscribe({
      next: (res:any) => {
        this.news = res
        console.log(this.news)
      }
    })
  }

  editNews (news:News) {
    this.newsService.editNews(this.id, news).subscribe({
      next: () => {
        console.log(news)
        this.router.navigateByUrl('/news')
      }
    })
  }

  editNewsForm = this.fb.group({
    title: ['',[Validators.required, Validators.minLength(3)]],
    description: ['',[Validators.required, Validators.minLength(3)]]
  })

  get newsValue() {
    return this.editNewsForm.controls
  }

  ngOnInit(): void {
    this.getSingleNews()
  }

}
