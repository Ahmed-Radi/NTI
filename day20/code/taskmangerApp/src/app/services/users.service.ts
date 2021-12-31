import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Users } from '../interfaces/userInterface';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  url='http://localhost:3000/'
  constructor(private http:HttpClient) { }

  getProfile(){
    return this.http.get<Users>(this.url+'profile')
  }
  updateProfile(users:Users){
    return this.http.patch(this.url+'profile',users)
  }

  addImage(image:any){
    return this.http.post(this.url+'profile/avatar',image)
  }
}
