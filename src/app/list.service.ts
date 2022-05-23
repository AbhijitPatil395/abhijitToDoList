import { Injectable } from "@angular/core";
import { task } from "./task";

@Injectable()
export class listService{
    arrTasks:task[]=[]

    createTask(t:task){
        this.arrTasks.push(t);
    }
    getPendingTasks():task[]{
        return this.arrTasks.filter((t)=>t.taskStatus=="Pending");
    }
    getCompletedTasks():task[]{
        return this.arrTasks.filter((t)=>t.taskStatus=="Done");
    }
    getTodaysDueTasks(){
        return this.arrTasks.filter((t)=>t.dueDate.toDateString()==new Date().toDateString()&& t.taskStatus!="Done");
    }
    getTomorrowsDueTasks():task[]{
        
        return this.arrTasks.filter((t)=>{
            let date2=new Date();
            if(t.dueDate.toDateString()==date2.toDateString())
            return false;
            let time = Math.abs(t.dueDate.getTime() - date2.getTime());
            var Days = Math.ceil(time / (1000 * 3600 * 24));  
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