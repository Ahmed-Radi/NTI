import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Tasks } from 'src/app/interface/tasksInterface';
import { TasksService } from 'src/app/services/tasks.service';

@Component({
  selector: 'app-update-task',
  templateUrl: './update-task.component.html',
  styleUrls: ['./update-task.component.css']
})
export class UpdateTaskComponent implements OnInit {

  task:Tasks = {}
  constructor(private tasksService:TasksService, private router:ActivatedRoute,private fb: FormBuilder,private route:Router) { }

  id:string = this.router.snapshot.params['id']

  getSingleTask() {
    this.tasksService.getSingleTask(this.id).subscribe({
      next: (res:any)=> {
        this.task = res
        console.log(res)
      }
    })
  }
  updateTask(task:Tasks) {
    this.tasksService.updateTask(this.id, task).subscribe({
      next: () =>{
        this.route.navigateByUrl('/viewtask')
      }
    })
  }


  taskForm = this.fb.group({
    title:['', [Validators.required, Validators.minLength(3)]],
    description:['', [Validators.required, Validators.minLength(3)]],
    complete:[false],
  })

  get myValues() {
    return this.taskForm.controls
  }
  ngOnInit(): void {
    console.log(this.id)
    this.getSingleTask()
  }

}
