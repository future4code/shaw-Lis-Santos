import { BaseDataBase } from "./BaseDataBase";
import { StudentsModel } from "../model/StudentModel";

export class StudentsDataBase extends BaseDataBase {
    async getAll() {
        try {
            const result = await BaseDataBase.connection("alunos").select("*")
            return result
        } catch (error: any) {
            throw new Error("Erro inesperado")
        }
    }
    public async insert(student: StudentsModel) {
        try {
            await BaseDataBase.connection("alunos")
            .insert({
                id: student.getId(),
                nome: student.getNome(),
                turma: student.getTurma(),
                status: student.getStatus()

            })
        } catch(error: any) {
            throw new Error("Deu ruim")
        }
    }
}