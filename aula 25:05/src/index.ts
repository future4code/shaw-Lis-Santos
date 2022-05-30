console.log("Hello, world!")

let nome: string = "Shaw"
let idade: number = 27

const array: Array<string> = ["batata", "cenoura"]
const arr: number[] = [1, 2, 3]


const pessoa: { nome: string, idade: number } = {
    nome: "Lis",
    idade: 24
}

function soma(a: number, b: number): number {
    return a + b
}

function buscarCarrosPorMarca(frota: array, marca: string): array {
    if (marca === undefined)
        return frota
}
return frota.filter(
    (carro) => {
        return carro.marca === marca
    }
)
}