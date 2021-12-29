import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { News } from 'src/app/interfaces/newsInterface';
import { NewsService } from 'src/app/services/news.service';

@Component({
  selector: 'app-add-news',
  templateUrl: './add-news.component.html',
  styleUrls: ['./add-news.component.css']
})
export class AddNewsComponent implements OnInit {

  news: News[] = []
  constructor(private fb:FormBuilder,private newsService: NewsService) { }


  addNews(news:News) {
    this.newsService.addNews(news).subscribe({
      next: (res:any) => {
        console.log(res) //
        // this.news = res
      }
    })
  }
  ngOnInit(): void {
  }

}
