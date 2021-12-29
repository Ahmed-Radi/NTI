import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Tasks } from 'src/app/interface/tasksInterface';
import { TasksService } from 'src/app/services/tasks.service';

@Component({
  selector: 'app-view-tasks',
  templateUrl: './view-tasks.component.html',
  styleUrls: ['./view-tasks.component.css']
})
export class ViewTasksComponent implements OnInit {

  tasks:Tasks[] = []
  constructor(private tasksService: TasksService) { }

  // id:string = this.route.snapshot.params['_id']
  getTask() {
    this.tasksService.getTask().subscribe({
      next: (res:any) => {
        console.log(res)
        this.tasks = res
      }, error: (httpError:any) => {
        console.log(httpError)
      }
    })
  }

  deleteTask(taskId:any,index:number) {
    this.tasksService.deleteTask(taskId).subscribe({
      next: () => {
        console.log(this.tasks)
        this.tasks.splice(index,1)
      }, error:(httpError)=> {
        console.log(httpError)
      }
    })
  }

  ngOnInit(): void {
    this.getTask()
  }

}
