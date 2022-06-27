import app from "./app"
import getAllAccounts from "./endpoints/getAllAccounts"
import {createAccount} from "./endpoints/createAccount"

app.get("/accounts", getAllAccounts)
app.post("/account", createAccount)

// Exercício 1

// a. Inicializar objetos.  Utilizando o "this".

// b. 
export class UserAccount {
    private cpf: string
    private name: string
    private age: number
    private transactions: Transaction[]

    constructor(
        cpf: string,
        name: string,
        age: number,
    ) {
        console.log("Chamando o construtor da classe UserAccount")
        this.cpf = cpf
        this.name = name
        this.age = age
        this.transactions = []
    }
    public getCpf = () => {
        return this.cpf
    }
    public getName = () => {
        return this.name
    }
    public getAge = () => {
        return this.age
    }
    public addTransaction = (transaction: Transaction) => {
        this.transactions.push(transaction)
    }
    public getTransactions = () => {
        return this.transactions
    }
}

const user1 = new UserAccount("047.711.905.371", "Lola", 21)
console.log(user1.getCpf())
console.log(user1.getName())
console.log(user1.getAge())


// A mensagem "Chamando o construtor da classe UserAccount" não apareceu nenhuma vez no terminal.

// c. Criando métodos para a leitura desses valores.


// Exercício 2

class Transaction {
    private description: string
    private value: number
    private date: string

    constructor(description: string, value: number, date: string) {
        this.description = description
        this.value = value
        this.date = date
    }
    public getDescription = () => {
        return this.description
    }

    public getValue = () => {
        return this.value
    }

    public getDate = () => {
        return this.date
    }
}
const transaction1 = new Transaction("Saque aniversário", 1200, "11/11/2022")
console.log(transaction1.getDescription())
console.log(transaction1.getValue())
console.log(transaction1.getDate())
user1.addTransaction(transaction1)
console.log(user1.getTransactions())


// Exercício 3
class Bank {
    private accounts: UserAccount[]

    constructor(accounts: UserAccount[]) {
        this.accounts = accounts
    }
    public getAccounts(): UserAccount[] {
        return this.accounts
    }
}