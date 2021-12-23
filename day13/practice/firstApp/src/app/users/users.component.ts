import { Component, OnInit } from '@angular/core';
import { Movies } from './moviesInterface'
@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {

  constructor() { }

  mes:string = "angular 6"

  message():string {
    return this.mes
  }

  onkeyup($event:any) {
    if ($event.keyCode === 13) {
      console.log($event.target.value)
    }
  }

  disable:boolean = true
  src:string = "../../assets/image/one.jpeg"

  count:number = 0
  increment() {
    this.count ++
  }

  movies:Movies[] = [
    {title: 'hh', actor: 'ttt', year:2022},
    {title: 'cc', actor: 'sss', year:2022},
    {title: 'mm', actor: 'fff', year:2022}
  ]
  value:string = ''

  num1:number = 0


  show:boolean = false

  isNotSelected:boolean = true

  movies1:Movies[] = []
  mTitle:string = ''
  mActor:string = ''
  mYear:number = 0

add() {
  this.movies1.push({title: this.mTitle, actor: this.mActor, year: this.mYear})
}

delete(i:number) {
  this.movies1.splice(i, 1)
}

refresh(){
  this.movies1 = [
    {title: 'hh', actor: 'ttt', year: 2022},
    {title: 'cc', actor: 'sss', year: 2022},
    {title: 'mm', actor: 'fff', year: 2022}
  ]
}


  obj = {
    a:'محمثلاح',
    c:20,
    d:'ahmed'
  }

  fahrenheit:number = 0
  celsius:number = 0

  ngOnInit(): void {
    this.refresh()
  }

}
