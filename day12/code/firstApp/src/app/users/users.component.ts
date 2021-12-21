import { Component, OnInit } from '@angular/core';
import { Movies } from './moviesInterface';
import { Users } from './userInteface';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {

  constructor() { }
// ng g c users
  // Data binding
  // One way data binding
  // Interpolation 
  firstName:string = 'omar'
  lastName:string = 'ismail'

  // getMsg
  msg:string = 'Msg from angular'

  getMsg():string{
    return this.msg
  }

  //////////////////////////////////////////////////////////////////////////

  //property binding [binding-target]="bindig-source"

  title:string = 'Angular property bindding example'
  color:string = 'red'

  isDisabled:boolean = true
  img:string = '../../assets/images/flowers.jpg'

  ///////////////////////////////////////////////////////////////////////

  // Event binding (event) = "function()"
  text:string = 'Hover here'
  hover(){
    this.text = 'Changed Text'
  }

  onKeyUp($event:any){
    console.log($event)
    console.log($event.target.value)

  }
  onKeyUpp($event:any){
    if($event.keyCode === 13){
      console.log($event.target.value)
    }
  }

  count:number = 0
  clickMe(){
    this.count ++
  }
  /////////////////////////////////////////////////////////////////////////

  // Two way data binding
  value:string = "test"

  //////////////////////////////////////////////////////////////////////////

  fruits:string[] = ['apples','orange','grapes']

  users:Users[] = [
    {name:'Osama',age:20,address:'dokii'},
    {name:'Mohamed',age:30,address:'madii'}
  ]

  movies:Movies[] = [
    {title:'Tito',actor:'ahmed sakaa',year:2000},
    {title:'7armya fa kg2',actor:'karem abbd-laziz',year:2001},
    {title:'alf mabrook',actor:'ahmed helmy',year:2005},

  ]

  num1:number = 0
  shown:boolean = true

  show:boolean = false
  // show false
  // moviesInterface 
  // title
  // actor
  // year
  ngOnInit(): void {
  
  }

 

}
