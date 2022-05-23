export class task
{
    taskId:number=0;
    taskName:string='';
    taskStatus:"Done"|"Pending"="Pending";
    dueDate!:Date;
    taskDesc:string='';
}