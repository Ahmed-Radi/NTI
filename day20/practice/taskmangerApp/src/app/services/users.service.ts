import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Users } from '../interface/userInterface';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  url = 'http://localhost:3000/'
  constructor(private http:HttpClient) { }

  profile(){
    return this.http.get(this.url + 'profile')
  }

  updateProfile(user:Users) {
    return this.http.patch(this.url+ 'editprofile',user)
  }

  addImage(image:any) {
    return this.http.post(this.url+'profile/avatar', image)
  }

  deleteImage() {
    return this.http.delete(this.url+'profile/deleteavatar')
  }

}
