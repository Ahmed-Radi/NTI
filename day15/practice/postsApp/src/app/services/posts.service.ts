import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Posts } from '../interfaces/postsInterface';

@Injectable({
  providedIn: 'root'
})
export class PostsService {
  url = 'https://jsonplaceholder.typicode.com/posts/'
  constructor(private http:HttpClient) { }
  getPosts() {
    return this.http.get<Posts[]>(this.url)
  }

  getSinglePost(id:string){
    return this.http.get(this.url + id)
  }
}
