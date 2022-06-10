//1.a)

let minhaString: string = "Olá!"
// minhaString = 1

// Quando tento atribuir um número a essa variável ocorre um erro informando que o tipo 'number' não pode ser atribuído ao tipo 'string'. 

// 1.b) 

let meuNumero: number = 1
// Para que essa variável também aceite strings terá que usar o Union Type, dessa forma: 
let meuNumero2: number | string

// 1.c) 

enum rainbowColors {
    VERMELHO = "Vermelho",
    LARANJA = "Laranja",
    AMARELA = "Amarela",
    VERDE = "Verde",
    AZUL = "Azul",
    AZULESCURO = "Azul Escuro", 
    VIOLETA = "Violeta"
}

const person = {
    nome: "Lis",
    idade: 24,
    corFavorita: "Preto"
}

type pessoa = {
    nome: string,
    idade: number,
    corFavorita: rainbowColors,
}

const person1: pessoa = {
    nome: "Matheus",
    idade: 21,
    corFavorita: rainbowColors.AZUL
}

const person2: pessoa = {
    nome: "Júlia",
    idade: 2,
    corFavorita: rainbowColors.VIOLETA
}

const person3: pessoa = {
    nome: "Carminha",
    idade: 55,
    corFavorita: rainbowColors.VERDE
}

// 1.d)

// enum rainbowColors {
//     VERMELHO = "Vermelho",
//     LARANJA = "Laranja",
//     AMARELA = "Amarela",
//     VERDE = "Verde",
//     AZUL = "Azul",
//     AZULESCURO = "Azul Escuro", 
//     VIOLETA = "Violeta"
// }