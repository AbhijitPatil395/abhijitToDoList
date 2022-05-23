import { Injectable } from "@angular/core";
import { task } from "./task";

@Injectable()
export class listService{
    arrTasks:task[]=[]
//     {taskId:1,taskName:"First task",taskStatus:"Pending",dueDate:new Date(),taskDesc:"description of the first task"},
//     {taskId:2,taskName:"Second task",taskStatus:"Pending",dueDate:new Date(),taskDesc:"description of the Second task"},
//     {taskId:3,taskName:"Third task",taskStatus:"Done",dueDate:new Date(),taskDesc:"description of the Third task"},
//     {taskId:4,taskName:"forth task",taskStatus:"Done",dueDate:new Date(),taskDesc:"description of the Fourth task"}
// ];

    createTask(t:task){
        //console.log("inside create task"+t);
        this.arrTasks.push(t);
        //console.log(this.arrTasks)
    }
    getPendingTasks():task[]{
        //console.log("inside service pending takss")
        //console.log(this.arrTasks.filter((t)=>t.taskStatus=="Pending"));
        return this.arrTasks.filter((t)=>t.taskStatus=="Pending");
    }
    getCompletedTasks():task[]{
        //console.log(this.arrTasks.filter((elem)=>elem.taskStatus=="Done"));
        return this.arrTasks.filter((t)=>t.taskStatus=="Done");
    }
    getTodaysDueTasks(){
    
        return this.arrTasks.filter((t)=>t.dueDate.toDateString()==new Date().toDateString()&& t.taskStatus!="Done");
    }
    getTomorrowsDueTasks():task[]{
        
        return this.arrTasks.filter((t)=>{
            //let date1=new Date(t.dueDate);
            let date2=new Date();
            if(t.dueDate.toDateString()==date2.toDateString())
            return false;
            let time = Math.abs(t.dueDate.getTime() - date2.getTime());
            var Days = Math.ceil(time / (1000 * 3600 * 24));  
            //console.log("days "+Days)
            return Days==1 && t.taskStatus!="Done"
        });
        
    }
    markCompleted(tid:number)
    {
        this.arrTasks.find((elem)=>elem.taskId==tid)!.taskStatus="Done";
    }

    getRemainingDays(tid:number){
        let t=this.arrTasks[tid];
        let oned = 24 * 60 * 60 * 1000;
    }
    getAllTasks(){
        return this.arrTasks;
    }
    
    removeTask(tid:number){

        this.arrTasks=this.arrTasks.filter((elem)=>elem.taskId!=tid);
    }
    
   


}