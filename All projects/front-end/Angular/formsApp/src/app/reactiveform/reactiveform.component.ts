import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Countries } from '../templateform/countriesInterface'

@Component({
  selector: 'app-reactiveform',
  templateUrl: './reactiveform.component.html',
  styleUrls: ['./reactiveform.component.css']
})
export class ReactiveformComponent implements OnInit {

  constructor( private fb:FormBuilder ) { }

  contactForm = this.fb.group({
    firstName: ['',[Validators.required, Validators.minLength(5)]],
    lastName: ['',[Validators.required, Validators.minLength(5)]],
    email: ['',[Validators.required, Validators.email]],
    gender: ['male',[Validators.required]],
    isMarried: [true],
    country: ['',[Validators.required]],
  })

  get myValues() {
    return this.contactForm.controls
  }


  log(x:any) {
    console.log(x)
  }


  countries: Countries[] = [
    {country: "Egypt"},
    {country: "Algeria"},
    {country: "Croatia"},
    {country: "Denmark"},
    {country: "Ecuador"},
    {country: "France"},
]

  ngOnInit(): void {
  }

}
