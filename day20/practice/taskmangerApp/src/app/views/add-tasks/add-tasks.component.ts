import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Tasks } from 'src/app/interface/tasksInterface';
import { TasksService } from 'src/app/services/tasks.service';

@Component({
  selector: 'app-add-tasks',
  templateUrl: './add-tasks.component.html',
  styleUrls: ['./add-tasks.component.css']
})
export class AddTasksComponent implements OnInit {

  tasks:Tasks[] = []
  constructor(private fb: FormBuilder,private tasksService:TasksService ,private route:Router) { }

  taskForm = this.fb.group({
    title:['',[Validators.required, Validators.minLength(3)]],
    description:['',[Validators.required, Validators.minLength(3)]],
    complete:[false],
  })

  get myValues() {
    return this.taskForm.controls
  }

  addTask(task:any) {
    this.tasksService.addTask(task).subscribe({
      next: () => {
        this.tasks.splice(0,0,task)
        this.route.navigateByUrl('/viewtask')
      }, error: (httpError) => {
        console.log(httpError)
      }
    })
  }

  ngOnInit(): void {

  }

}
