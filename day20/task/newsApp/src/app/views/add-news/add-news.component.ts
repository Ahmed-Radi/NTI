import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { News } from 'src/app/interfaces/newsInterface';
import { NewsService } from 'src/app/services/news.service';

@Component({
  selector: 'app-add-news',
  templateUrl: './add-news.component.html',
  styleUrls: ['./add-news.component.css']
})
export class AddNewsComponent implements OnInit {

  news: News[] = []
  constructor(private fb:FormBuilder,private newsService: NewsService, private router:Router) { }

  addNewsForm = this.fb.group({
    title:['',[Validators.required, Validators.minLength(3)]],
    description:['',[Validators.required, Validators.minLength(3)]],
    // image:['',[Validators.required]]
  })

  get newsValue(){
    return this.addNewsForm.controls
  }

  addNews(news:News) {
    this.newsService.addNews(news).subscribe({
      next: () => {
        this.router.navigateByUrl('/news')
      }, error : (httpError) => {
        console.log(httpError)
      }
    })
  }


  ngOnInit(): void {
  }

}
