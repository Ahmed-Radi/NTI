import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css']
})
export class ParentComponent implements OnInit {

  constructor() { }

  counter:number = 0;

  increment() {
    return this.counter ++;
  }

  decrement() {
    return this.counter --;
  }

  countChangedHandler(count:number){
    this.counter = count
  }
  ngOnInit(): void {
  }

}
