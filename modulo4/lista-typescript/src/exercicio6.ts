type dataClients = {
    cliente: string,
    saldoTotal: number,
    debitos: number[]
}

const clients: dataClients[] = [
    { cliente: "João", saldoTotal: 1000, debitos: [100, 200, 300] },
    { cliente: "Paula", saldoTotal: 7500, debitos: [200, 1040] },
    { cliente: "Pedro", saldoTotal: 10000, debitos: [5140, 6100, 100, 2000] },
    { cliente: "Luciano", saldoTotal: 100, debitos: [100, 200, 1700] },
    { cliente: "Artur", saldoTotal: 1800, debitos: [200, 300] },
    { cliente: "Soter", saldoTotal: 1200, debitos: [] }
]

const reduce = clients.map((client) => {
    return client.debitos.reduce((previousValue: number, currentValue: number) => previousValue + currentValue, 0)
})
console.table(reduce)

const balance = clients.map((client) => {
    return (
        client.saldoTotal
    )
})

console.table(balance)

function totalBalance(clients: dataClients[]): object {
    let result = balance.map(function (element, index) {
        return ((element - reduce[index]) < 0) ? ((element - reduce[index])) : ""
    })
    return result.slice(2, 4)
}


console.log(totalBalance(clients))