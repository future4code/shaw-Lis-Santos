import { Request, Response } from 'express'
import { StudentsDataBase } from '../data/StudentsDataBase'

export default async function getAllStudents(req: Request, res: Response): Promise<void> {
    try {
        const studentDB = new StudentsDataBase()
        const students = await studentDB.getAll()
        res.send(students)
    } catch (error: any) {
        throw new Error()
    }
}