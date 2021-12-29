import { Component, OnInit } from '@angular/core';
import { News } from 'src/app/interfaces/newsInterface';
import { NewsService } from 'src/app/services/news.service';

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.css']
})
export class NewsComponent implements OnInit {

  news:News[] = []
  constructor(private newsService: NewsService) {}

  getNews() {
    this.newsService.getNews().subscribe({
      next: (res:any) => {
        this.news = res
      }
    })
  }

  ngOnInit(): void {
    this.getNews()
  }

}
