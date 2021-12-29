import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  url = 'http://localhost:3000/'
  constructor(private http:HttpClient) { }

  signUp(credentials:any){
    return this.http.post(this.url + 'users', credentials)
  }

  login(credentials:any) {
    return this.http.post(this.url + 'login', credentials)
  }

  getToken () {
    return localStorage.getItem('token')
  }

  logout () {
    return this.http.delete(this.url + 'logout')
  }

}
