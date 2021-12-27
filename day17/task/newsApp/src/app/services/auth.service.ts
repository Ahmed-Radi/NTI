import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  url = "http://localhost:3000/"
  constructor(private http:HttpClient) { }

  signUp(credential:any) {
    return this.http.post(this.url+"reporter", credential)
  }

}
