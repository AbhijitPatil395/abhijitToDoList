import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'pm-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'toDoList';
  type:"Pending"|"Done"="Done";
  ngOnInit(): void {
    console.log("app compo:"+this.type)
  }
  
}
