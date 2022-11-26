import { Component, OnInit } from '@angular/core';
import { Countries } from './countriesInterface';

@Component({
  selector: 'app-templateform',
  templateUrl: './templateform.component.html',
  styleUrls: ['./templateform.component.css']
})
export class TemplateformComponent implements OnInit {

  constructor() { }

  countries: Countries[] = [
    {country: "Egypt"},
    {country: "Algeria"},
    {country: "Croatia"},
    {country: "Denmark"},
    {country: "Ecuador"},
    {country: "France"},
]

  log(x:any) {
    console.log(x)
  }

  onSubmit(contentForm:any) {
    console.log(contentForm)
  }
  ngOnInit(): void {
  }

}
