import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Tasks } from 'src/app/interfaces/taskInterface';
import { TasksService } from 'src/app/services/tasks.service';

@Component({
  selector: 'app-edit-task',
  templateUrl: './edit-task.component.html',
  styleUrls: ['./edit-task.component.css']
})
export class EditTaskComponent implements OnInit {

  constructor(private taskService:TasksService,private route:ActivatedRoute,private router:Router) { }
  id:string = this.route.snapshot.params['id']
  task:Tasks = {}
  getSingleTask(){
    this.taskService.getSingleTask(this.id).subscribe({
      next:(res:any)=>{
        console.log(res)
        this.task = res
      }
    })
  }

  updateTask(data:Tasks){
    this.taskService.updateTask(this.id,data).subscribe({
      next:(res:any)=>{
        this.router.navigateByUrl('/tasks')
      }
    })
  }


  ngOnInit(): void {
    this.getSingleTask()
  }

}
