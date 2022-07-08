import { Request, Response } from 'express'
import { TaskBusiness } from '../Business/TaskBusiness'
import { taskInput } from '../types/task'

export class TaskController {
    async createTask(req: Request, res: Response) {
        try {
            const { title, description, deadline, user_id} = req.body
            console.log(title, description, deadline, user_id)
            const newTask: taskInput = {
                title,
                description,
                deadline,
                user_id
            }
            const taskBusiness = new TaskBusiness()
            const task = await taskBusiness.createTask(newTask)
            res.status(201).send({ message: "Tarefa criada com sucesso", task })
        } catch (error: any) {
            res.status(500).send({ message: error.slqMessage || error.message })
        }
    }
    async getTasksById(req: Request, res:Response){
        try{
            const id = req.params.id

            const taskBussines = new TaskBusiness()

            const task = await taskBussines.getTask(id)

            res.status(201).send(task)

        }catch(error:any){
            res.status(500).send({ message: error.slqMessage || error.message })
        }
    }
} 