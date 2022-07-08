import { TaskData } from "../data/TaskData";
import { generateId } from "../services/idGenerator";
import { taskInput} from "../types/task";

export class TaskBusiness {
    async createTask(task: taskInput) {
        const { title, description, deadline, user_id } = task

        if (
            !title ||
            !description ||
            !deadline ||
            !user_id
        ) {
            throw new Error('Preencha os campos "title", "description", "deadline" e "authorId"')
        }

        const id: string = generateId()
        const taskData = new TaskData()

        const newTask = {
            id, 
            title,
            description,
            deadline,
            user_id
        }
        taskData.insertTask(newTask)

        return newTask

    }
    async getTask(id:string){

        const taskData = new TaskData()

        const taskDB = taskData.getTaskById(id)

        return taskDB
}
}