import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Tasks } from '../interface/tasksInterface';

@Injectable({
  providedIn: 'root'
})
export class TasksService {

  url:any = 'http://localhost:3000/'
  constructor(private http:HttpClient) { }

  getTask() {
    return this.http.get(this.url + 'tasks')
  }

  addTask(credentials:Tasks) {
    return this.http.post(this.url + 'tasks', credentials)
  }

  deleteTask(id:any){
    return this.http.delete(this.url+`task/${id}`)
  }

  getSingleTask(id:string) {
    return this.http.get(this.url+`tasks/${id}`)
  }

  updateTask(id:string, body:any) {
    return this.http.patch(this.url+`task/${id}`, body)
  }

}
