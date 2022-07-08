import { Request, Response } from 'express'
import { StudentsDataBase } from '../data/StudentsDataBase'
import { StudentsModel } from '../model/StudentModel'

export default async function createStudent(req: Request, res: Response): Promise<void> {
    try {
        const { nome, turma, status } = req.body
        const id = Date.now().toString()
        const student = new StudentsModel(id, nome, turma, status)
        const studentDB = new StudentsDataBase()
        await studentDB.insert(student)
        res.status(201).send("Estudante criado!")
    } catch (error: any) {
        res.status(500).end()
    }
}