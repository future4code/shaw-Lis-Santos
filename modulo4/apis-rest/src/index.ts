import express, { Request, Response } from "express";
import cors from "cors";

const app = express();

app.use(express.json());
app.use(cors());

enum UserType {
    ADMIN = "ADMIN",
    NORMAL = "NORMAL"
}
type User = {
    id: number,
    name: string,
    email: string,
    type: UserType,
    age: number
}


let users: User[] = [
    {
        id: 1,
        name: "Alice",
        email: "alice@email.com",
        type: UserType.ADMIN,
        age: 12
    },
    {
        id: 2,
        name: "Bob",
        email: "bob@email.com",
        type: UserType.NORMAL,
        age: 36
    },
    {
        id: 3,
        name: "Coragem",
        email: "coragem@email.com",
        type: UserType.NORMAL,
        age: 21
    },
    {
        id: 4,
        name: "Dory",
        email: "dory@email.com",
        type: UserType.NORMAL,
        age: 17
    },
    {
        id: 5,
        name: "Elsa",
        email: "elsa@email.com",
        type: UserType.ADMIN,
        age: 17
    },
    {
        id: 6,
        name: "Fred",
        email: "fred@email.com",
        type: UserType.ADMIN,
        age: 60
    }
]

// 1
app.get('/users', (req: Request, res: Response) => {

    const allUsers = users.map((user) => {
        return user
    })
    res.send(allUsers)
})

// 1.a) o método GET.

// 1.b) A entidade será users, tendo em vista que quero "pegar" usuários.

//2
app.get('/users/:type', (req: Request, res: Response) => {
    let codeError: number = 400
    try {
        const type = req.params.type
        // const findType = users.filter((user) => {
        //     user.type === type
        // })

        let filterType = users.filter((user) => {
            if (user.type === type) {
                return user
            }
        })
        if (type !== "ADMIN" && "NORMAL") {
            codeError = 404
            throw new Error("Usuário não encontrado!")

        }
        res.status(200).send(filterType)


    } catch (error: any) {
        res.status(codeError).send({ message: error.message })
    }
})

//2.a) Passei por path params porquê consegui enxergar melhor o fluxo da atividade dessa forma.


// 3
app.get('/users', (req: Request, res: Response) => {
    let codeError: number = 400
    try {
        const name: string = req.query.name as string
        const user: User | undefined = users.find((user) => user.name === name)
        if (!user) {
            codeError = 404
            throw new Error("User not found")
        }
        res.status(200).send({ user })

    } catch (error: any) {
        res.status(codeError).send({ message: error.message })
    }
})

// 3.a) Query Params

// 4
app.post("/users", (req: Request, res: Response) => {
    let codeError: number = 400
    try {
        const { id, name, email, type, age } = req.body
        if (!id || !name || !email || !type || !age) {
            codeError = 422
            throw new Error("Por favor, verifique todos os campos do body!")
        }

        const newUser: User = {
            id,
            name,
            email,
            type,
            age
        }
        users.push(newUser)
        res.status(201).send("Usuário criado!")
    } catch (error: any) {
        res.status(codeError).send({ mensagem: error.message })
    }
})

// 4.a) 
app.put("/users", (req: Request, res: Response) => {
    let codeError: number = 400
    try {
        const { id, name, email, type, age } = req.body
        if (!id || !name || !email || !type || !age) {
            codeError = 422
            throw new Error("Por favor, verifique todos os campos do body!")
        }

        const newUser: User = {
            id,
            name,
            email,
            type,
            age
        }
        users.push(newUser)
        res.status(201).send("Usuário criado!")
    } catch (error: any) {
        res.status(codeError).send({ mensagem: error.message })
    }
})

// Não mudou nada em relação a resposta da API.

// 4.b) Não. Todos os verbos/métodos de uma API são designados para criar funções específicas dentro da aplicação, seguindo a convenção de boas práticas. Sendo assim, o método PUT não é apropriado para esta tarnsação, tendo em vista que o exercício pede para criar um novo usuário, sendo este o endpoint atribuido ao método POST. O método PUT atualiza recursos existentes. 

app.listen(3003, () => {
    console.log("Server is running in http://localhost:3003")
});