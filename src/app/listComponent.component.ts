import { Component, Injectable, Input, OnInit } from "@angular/core";
import { inject } from "@angular/core/testing";
import { listService } from "./list.service";
import { task } from "./task";
@Component({
    selector:'pm-list',
    templateUrl:'./listComponent.component.html'
})

export class listComponent
{
   
    @Input() taskType!:string;
    myTitle!:string;
    allTasks:task[]=[];
    tName:string='';
    constructor(private ls:listService){}

   
    getTasks():task[]{
       
        if(this.taskType=="Pending")
        {
            this.myTitle="Pending tasks "
            return this.ls.getPendingTasks();
        }
        else if(this.taskType=="Done")
        {
            this.myTitle="Completed Tasks"
            return this.ls.getCompletedTasks();
        }
        else if(this.taskType=="tod")
        {
            this.myTitle="Today's Due "
            return this.ls.getTodaysDueTasks();
        }
        else
        {
            this.myTitle="Tomorrow's Due "
            return this.ls.getTomorrowsDueTasks();
        }
        
    }
    markCompleted(id:number){
        this.ls.markCompleted(id);
    }
    remove(id:number){
        this.ls.removeTask(id);
    }
    isPending(t:task):boolean{
        return  t.taskStatus=="Pending";
    }
}