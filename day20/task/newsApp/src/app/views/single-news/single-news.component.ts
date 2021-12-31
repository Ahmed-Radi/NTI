import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { News } from 'src/app/interfaces/newsInterface';
import { NewsService } from 'src/app/services/news.service';

@Component({
  selector: 'app-single-news',
  templateUrl: './single-news.component.html',
  styleUrls: ['./single-news.component.css']
})
export class SingleNewsComponent implements OnInit {

  constructor(private newsService:NewsService,private route:ActivatedRoute) { }
  id:string = this.route.snapshot.params['id']
  news:News = {}
  getSingleNews() {
    this.newsService.getSingleNews(this.id).subscribe({
      next: (res:any) => {
        this.news = res
      }
    })
  }
  ngOnInit(): void {
    this.getSingleNews()
  }

}
