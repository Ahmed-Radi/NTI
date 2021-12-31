import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  url:any =  'http://localhost:3000/'
  constructor(private http:HttpClient) {  }

  profile () {
    return this.http.get(this.url + 'profile')
  }

  getToken() {
    return localStorage.getItem('token')
  }

  logout () {
    return this.http.delete(this.url + 'logout')
  }
}
