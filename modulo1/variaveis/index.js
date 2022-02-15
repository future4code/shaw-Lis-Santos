/* 1.
let a = 10
let b = 10

console.log(b) // O resultado de b foi igual a 10.

b = 5
console.log(a, b) // O resultado de a foi igual a 10 e o resultado de b modificou para 5.


2. 
let a = 10
let b = 20
c = a
b = c
a = b

console.log(a, b, c) // O resultado é 10, 10, 10.


3. 
let p = prompt("Quantas horas você trabalha por dia?") // Recomendo trocar a variável p por: horasTrabalhadas
let t = prompt("Quanto você recebe por dia?") // Recomendo trocar a variável t por: ganhoDiario */



1. 
//a
let nome 

//b
let idade

//c
console.log(typeof nome)
console.log(typeof idade) 

//d
// Foi impresso o tipo undefined pois não foi atribuído nenhum valor as variáveis.

//e
nome = prompt ("Qual seu nome?")
idade = prompt ("Qual sua idade?")

//f
console.log(typeof nome)
console.log(typeof idade) // As variáveis foram interpretadas como string.

//g
console.log("Olá", nome, "você tem", idade, "anos")

// 2. 
let  pergunta1 = "Hoje está chovendo?"
let pergunta2 = "O céu é azul?"
let pergunta3 = "2 + 2 é igual a 5?"

//2.a
let resposta1 = "Não"
let resposta2 = "Sim"
let resposta3 = "Não"

// 2.b 
console.log(pergunta1, resposta1)
console.log(pergunta2, resposta2)
console.log(pergunta3, resposta3)

//3
let a = 10
let b = 25
let c = b
b = a 
a = c 
console.log(a) // O valor de a agora é 25.
console.log(b) // O valor de b agora é 10.
// Armazenei o valor de b em uma nova variável para que ele não se perdesse ao o igualar ao valor de a.

//DESAFIO

let primeiroNumero = Number(prompt ("Digite um número"))
let segundoNumero = Number(prompt ("Digite novamente um número"))
let soma = primeiroNumero + segundoNumero
let multiplicacao = primeiroNumero * segundoNumero
console.log("A soma dos números é igual a:", soma)
console.log("A multiplicação dos números é igual a:", multiplicacao)