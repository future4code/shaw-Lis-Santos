import app from "./app"
import { Request, Response } from 'express'
import { BaseDataBase } from "./data/BaseDataBase"
import { StudentsDataBase } from "./data/StudentsDataBase"
import { StudentsModel } from "./model/StudentModel"
import getAllStudents from "./endpoints/getAllStudents"
import createStudent from "./endpoints/createStudent"


// app.get("/test", async (req: Request, res: Response) => {
//     // console.log("Hello World")
//     const result = await new StudentsDataBase().getAll()
//     res.send(result)
// })
// app.post("/test", async (req: Request, res: Response) => {
//     await new StudentsDataBase().insert
//     const student = new StudentsModel("003", "Maria", "Turma", "Reprovado")
//     res.status(200).send(student)
// })

app.get("/students", getAllStudents)
app.post("/students", createStudent)