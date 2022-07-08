export class StudentsModel {
    constructor(
        private id: string,
        private nome: string,
        private turma: string,
        private status: "Aprovado" | "Reprovado" = "Aprovado"
    ) {
    }
    public getId(): string {
        return this.id
    }
    public getNome(): string {
        return this.nome
    }
    public getTurma(): string {
        return this.turma
    }
    public getStatus(): string {
        return this.status
    }
}