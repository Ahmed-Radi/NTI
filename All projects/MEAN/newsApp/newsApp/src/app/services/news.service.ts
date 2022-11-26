import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { News } from '../interfaces/newsInterface';

@Injectable({
  providedIn: 'root'
})
export class NewsService {

  url: string = 'http://localhost:3000/'
  constructor(private http:HttpClient) { }

  getNews() {
    return this.http.get(this.url+'news')
  }

  getSingleNews(id:string) {
    return this.http.get(this.url+`news/${id}`)
  }

  editNews(id:string, news:News) {
    return this.http.patch(this.url+`news/${id}`, news)
  }

  addNews(body:any) {
    return this.http.post(this.url+'news', body)
  }

  deleteNews(id: string) {
    return this.http.delete(this.url + `news/${id}`)
  }

  addImage(id:string,image:any) {
    return this.http.post(this.url+ `image/${id}`, image)
  }
}
