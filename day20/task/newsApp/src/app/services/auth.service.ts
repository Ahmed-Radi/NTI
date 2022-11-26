import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  url = "https://news-api-nti.herokuapp.com/"
  constructor(private http:HttpClient) { }

  signUp(credential:any) {
    return this.http.post(this.url+"reporter", credential)
  }

  login(credentials: any) {
    return this.http.post(this.url+'login', credentials)
  }

  getToken() {
    return localStorage.getItem('token');
  }

}
