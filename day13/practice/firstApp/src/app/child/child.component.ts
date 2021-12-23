import { Component, Input, Output,OnInit,EventEmitter } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit {

  constructor() { }

  @Input() count:number = 0

  @Output() countChanged:EventEmitter<number> = new EventEmitter();
  count1:number = 0;

  increment(){
    this.count1 ++
    this.countChanged.emit(this.count1)
  }

  decrement(){
    this.count1 --
    this.countChanged.emit(this.count1)
  }

  ngOnInit(): void {
  }

}
function output() {
  throw new Error('Function not implemented.');
}

