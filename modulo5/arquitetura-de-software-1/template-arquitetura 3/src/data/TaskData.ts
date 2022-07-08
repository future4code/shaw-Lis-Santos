import { connection } from "../connection";
 import { task } from "../types/task";

export class TaskData{
    async insertTask(task:task){
        const result =  await connection('Tasks')
        .insert({
           id: task.id,
           title: task.title,
           description: task.description,
           deadline: task.deadline,
           user_id: task.user_id
        })
        return result
    }
    async getTaskById(id:string){
        const result = await connection('Tasks')
        .select("*")
        .where({id})
        console.log(result)

   return result
    }
} 