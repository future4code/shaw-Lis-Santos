// Exercícios de interpretação de código

//1. 
let valor = 0
for(let i = 0; i < 5; i++) {
valor += i
}
console.log(valor) 


/* Executando o laço de repetição 'for', que no caso em questão irá permanecer enquanto a variável for menor do que 5, e depois irá realizar 
a soma de todos os resultados. O resultado impresso no console será 10. */

//2
const lista = [10, 11, 12, 15, 18, 19, 21, 23, 25, 27, 30]
for (let numero of lista) {
  if (numero > 18) {
		console.log(numero)
	}
}
//a. 10, 11, 12, 15
//b. Sim. Usando o indexOf.

//3.
const quantidadeTotal = Number(prompt("Digite a quantidade de linhas: "))
let quantidadeAtual = 0
while(quantidadeAtual < quantidadeTotal){
  let linha = ""
  for(let asteriscos = 0; asteriscos < quantidadeAtual + 1; asteriscos++){
    linha += "*"
  }
  console.log(linha)
  quantidadeAtual++
} 
//3


// Exercícios de escrita de código
//1.a
let quantidadeBichos = Number(promppt("Quantos bichos de estimação você tem?"))
let nomeBichos = []
let i = 0
//1.b
if(quantidadeBichos === 0) {
    console.log("Que pena! você pode adota um pet!")

//1.c
} else {
    while (i < quantidadeBichos) {
        let nome = prompt("Qual o nome do seu bicho?")
        nomeBichos.push(nome)
        i = i + 1
    }
}
//1.d
console.log(nomeBichos)

//2
let arrayOriginal = [1, 4, 6, 7, 8]

//a. 
function imprimirValores (array) {
 for (let numeros of array) {
    console.log(array)
}
}
imprimirValores(arrayOriginal)

//b.
function dividirArrayPoDez(array) {
    for(let i = 0; i < 5; i ++) {
        resultado = array[i] / 10 
        console.log(resultado)
    }
}
dividirArrayPoDez(array)
//c.
function numerosPares (array) {
    let novoArray = []
    for (let numero of array) {
        if (numero % 2 === 0) {
            novoArray.push(numero)
        }
    }
console.log(novoArray) 
}
numerosPares(arrayOriginal)

//d. 
function imprimirNovoArray (array) {
    let novoArray = []
let arrayOriginal = [1, 4, 6, 7, 8]
for (let i = 0; i < arrayOriginal.length; i++) {
    let string = `O elemento do índex ${i} é: ${arrayOriginal[i]}`;
    console.log(string)
}
novoArray.push(novoArray)

}
imprimirNovoArray()

//e.
function imprimirMaiorEMenor (array) {
let maior = array[0]
let menor = array [0]

for(let numero of array) {
    if (numero > maior) {
        maior = number 
    }
if (number < menor) {
    menor = number 
}
console.log(maior)
console.log(menor)
}
}