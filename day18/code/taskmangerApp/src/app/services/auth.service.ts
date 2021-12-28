import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  url='http://localhost:3000/'
  constructor(private http:HttpClient) { }

  // signUp
  signUP(credentials:any){
    return this.http.post(this.url+'users',credentials)
  }

  // login

  login(credntials:any){
    return this.http.post(this.url+'login',credntials)
  }

  getToken(){
    return localStorage.getItem('token')
  }
}
