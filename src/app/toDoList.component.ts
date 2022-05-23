import { Component, Injectable, OnInit ,ViewChild} from "@angular/core";
import { listService } from "./list.service";
import { listComponent } from "./listComponent.component";
import { task } from "./task";
@Component({
    selector: 'pm-toDoList',
    templateUrl:'./toDoList.component.html',
    providers:[listService]

})

export class toDoList implements OnInit 
{
    types:string[]=["Pending","tod","tom","Done"];
    
    title = 'toDoList';
    taskId:number=1;
    tName!:string;
    tDesc!:string;
    tDueDate!:Date;
    t!:task;
    
    @ViewChild(listComponent)
    private listCompo!: listComponent;

    constructor(private ls:listService){}
    ngOnInit(): void {
      console.log("todolist compo init:")
    }
    addTask(){
        console.log("add task of todolist")
        this.t=new task();
        this.t.dueDate=new Date(this.tDueDate);
        this.t.taskName=this.tName;
        this.t.taskId=this.taskId++;
        this.t.taskDesc=this.tDesc;
        this.t.taskStatus="Pending";
        console.log(this.t);
        this.ls.createTask(this.t);
    }
    onKeyName(event:any){
        this.tName=event.target.value; 
    }
    onKeyDesc(event:any){
        this.tDesc=event.target.value; 
    }
    
  }
  