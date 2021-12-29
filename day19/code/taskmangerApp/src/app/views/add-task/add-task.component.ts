import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Tasks } from 'src/app/interfaces/taskInterface';
import { TasksService } from 'src/app/services/tasks.service';


@Component({
  selector: 'app-add-task',
  templateUrl: './add-task.component.html',
  styleUrls: ['./add-task.component.css']
})
export class AddTaskComponent implements OnInit {

  constructor(private fb:FormBuilder,private taskService:TasksService,private router:Router) { }

  taskForm= this.fb.group({
    title:['',[Validators.required]],
    description:['',Validators.required],
    completed:[false]
  })

  addTask(task:Tasks){
    this.taskService.postTasks(task).subscribe({
      next:(res:any)=>{
        console.log(res)
        this.router.navigateByUrl('/tasks')
      }
    })
  }

  get taskValue(){
    return this.taskForm.controls
  }

  ngOnInit(): void {
  }

}
