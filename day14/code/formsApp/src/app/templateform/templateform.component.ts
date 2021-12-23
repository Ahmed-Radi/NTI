import { Component, OnInit } from '@angular/core';
import { Countries } from './countriesInterface';

@Component({
  selector: 'app-templateform',
  templateUrl: './templateform.component.html',
  styleUrls: ['./templateform.component.css']
})
export class TemplateformComponent implements OnInit {

  // test:string
  // {:'amr'}
  constructor() {}
  log(x:any){
    console.log(x)
  }
  onSubmit(contactForm:any){
    console.log(contactForm)
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
