import express, { Request, Response } from "express";
import cors from "cors";

const app = express();

app.use(express.json());
app.use(cors());

type User = {
    name: string,
    CPF: string,
    birthDate: string,
    balance: number,
    transactions: Extract[]
}

type Extract = {
    value: number,
    date: string,
    description: string
}

const users: User[] = [
    {
        name: "Serena",
        CPF: "112.777.413-15",
        birthDate: "10/10/1990",
        balance: 3000,
        transactions: [
            {
                value: 200,
                date: "03/06/2022",
                description: "Compra semanal"
            },
            {
                value: 2000,
                date: "09/11/2022",
                description: "Aluguel"
            }
        ]
    },
    {
        name: "Blair",
        CPF: "189.787.915-10",
        birthDate: "11/11/1991",
        balance: 2000,
        transactions: [
            {
                value: 1000,
                date: "01/07/2022",
                description: "Escola"

            }
        ]
    },
    {
        name: "Chuck",
        CPF: "001.343.777-40",
        birthDate: "11/12/1987",
        balance: 1500,
        transactions: [
            {
                value: 1200,
                date: "01/08/2022",
                description: "Relógio"
            }
        ]
    }
]

app.post("/users", (req: Request, res: Response) => {
    let codeError = 400
    try {
        req.body.balance = 0
        req.body.transactions = []
        const { name, CPF, birthDate, balance, transactions } = req.body

        const currentYear = new Date().getFullYear()
        const formatBirthDate: string[] = birthDate.split("/")
        const age: number = currentYear - Number(formatBirthDate[2])
        const newUser = {
            name,
            CPF,
            birthDate,
            balance,
            transactions
        }
        if (age < 18) {
            codeError = 422
            throw new Error("O usuário deve possuir 18 anos ou mais para conseguir se cadastrar")
        }
        const checkCpf = users.find((user) => {
            if (user.CPF === req.body.CPF) {
                throw new Error("CPF já cadastrado")
            }
        })

        users.push(newUser)
        res.status(201).send("Usuário criado!")
        res.send(!checkCpf)
    } catch (error: any) {
        res.status(codeError).send({ mensagem: error.message })
    }
})

app.get("/users", (req: Request, res: Response) => {
    const allUsers = users.map((user) => {
        return user
    })
    res.status(200).send(allUsers)
})

app.get("/users", (req: Request, res: Response) => {
    let codeError = 400
    try {
        const name = req.query.name
        const cpf = req.query.cpf
        const checkBalance = users.filter((user) => {
            if (user.name === name && user.CPF === cpf) {
                return user
            }
        }).map((user) => {
            return user.balance
        })
        if (checkBalance.length === 0) {
            codeError = 404
            throw new Error("Usuário não encontrado")
        }
        res.send(checkBalance)

    } catch (error: any) {
        res.status(codeError).send({ mensagem: error.message })
    }
})

app.put("/users", (req: Request, res: Response) => {
    const name = req.query.name
    const CPF = req.query.CPF
    const addBalance = users.filter((user) => {
        if (user.name === name && user.CPF === CPF) {
            user.balance = user.balance + req.body.balance
            return user
        }
    })
    res.status(200).send(addBalance)
})


app.post("/users", (req: Request, res: Response) => {

    const user = users.find((user) => {
        if (user.CPF === req.body.cpf) {
            return user
        }
    })
    console.log(user)


    if (user) {
        const transaction = user.transactions.find((transaction) => {
            if (transaction.value === req.body.transactions.value && transaction.date === req.body.transactions.date && transaction.description === req.body.transactions.description) {
                return transaction
            }
        })
        console.log(transaction)

        if (transaction) {
            user.balance = user.balance - transaction.value
        }
        // if (!transaction?.date) {
        //     return req.body.transaction.date = "Hoje"
        // }
    }
    res.send(user)

})

app.post("/users", (req: Request, res: Response) => {

})

app.listen(3003, () => {
    console.log("Server is running in http://localhost:3003")
});