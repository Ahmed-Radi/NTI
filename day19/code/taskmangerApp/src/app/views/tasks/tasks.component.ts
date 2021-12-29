import { Component, OnInit } from '@angular/core';
import { Tasks } from 'src/app/interfaces/taskInterface';
import { TasksService } from 'src/app/services/tasks.service';

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.css']
})
export class TasksComponent implements OnInit {

  tasks:Tasks[] = []
  constructor(private taskService:TasksService) { }

  getTasks(){
    this.taskService.getTasks().subscribe({
      next:(res:any)=>{
        console.log(res)
        this.tasks = res
      }
    })
  }
  //'7877876677878678'
  deleteTask(task:string,i:number){
    this.taskService.deleteTask(task).subscribe({
      next:()=>{
        this.tasks.splice(i,1)
      }
    })
  }
  ngOnInit(): void {
    this.getTasks()
  }

}
