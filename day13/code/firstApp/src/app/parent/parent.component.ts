import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css']
})
export class ParentComponent implements OnInit {

  constructor() { }
  Counter: number = 0
  increment(){
    this.Counter ++
  }

  decrement(){
    this.Counter --
  }

  countChangeHandler(count:number){
    console.log(count)
    this.Counter = count
  }

  ngOnInit(): void {
  }

}
