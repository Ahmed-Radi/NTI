import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Tasks } from '../interfaces/taskInterface';

@Injectable({
  providedIn: 'root'
})
export class TasksService {

  url='http://localhost:3000/'
  constructor(private http:HttpClient) { }

  getTasks(){
    return this.http.get<Tasks[]>(this.url+'tasks')
  }

  postTasks(task:Tasks){
    return this.http.post(this.url+'tasks',task)
  }

  deleteTask(id:string){
   return this.http.delete(this.url+'tasks/' + id)
  }
  getSingleTask(id:string){
    return this.http.get(this.url+'tasks/'+id)
  }
  updateTask(id:string,body:Tasks){
    return this.http.patch(this.url+'tasks/'+id,body)
  }
}
