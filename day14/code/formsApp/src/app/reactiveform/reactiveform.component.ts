import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Countries } from '../templateform/countriesInterface';

@Component({
  selector: 'app-reactiveform',
  templateUrl: './reactiveform.component.html',
  styleUrls: ['./reactiveform.component.css']
})
export class ReactiveformComponent implements OnInit {

  constructor(private fb:FormBuilder) { }

  // contactForm = new FormGroup({
  //   firstName: new FormControl(),
  //   lastName: new FormControl()
  // })

  
  contactForm = this.fb.group({
    // '' --> intial value
    firstName:['',[Validators.required,Validators.minLength(3)]],
    lastName:['',[Validators.required,Validators.minLength(3)]],
    email:['',[Validators.required,Validators.email]],
    gender:['male',[Validators.required]],
    isMarried:[true],
    country:['',[Validators.required]]
  })
  log(){
    console.log(this.contactForm)
  }

  get myValues(){
    return this.contactForm.controls
  }
  countries:Countries[] = [
    {name:'Egypt'},
    {name:'London'},
    {name:'India'},
    {name:'America'}

  ]

  ngOnInit(): void {
  }

}
