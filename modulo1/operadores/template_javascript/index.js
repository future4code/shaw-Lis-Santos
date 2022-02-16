/* Exercícios de interpretação de código
1. 
const bool1 = true
const bool2 = false
const bool3 = !bool2

let resultado = bool1 && bool2
console.log("a. ", resultado) // a. False 

resultado = bool1 && bool2 && bool3 
console.log("b. ", resultado) // b. False

resultado = !resultado && (bool1 || bool2) 
console.log("c. ", resultado) // c. True

console.log("d. ", typeof resultado) // d. Boolean 

2. 
let primeiroNumero = prompt("Digite um numero!")
let segundoNumero = prompt("Digite outro numero!")

const soma = primeiroNumero + segundoNumero

console.log(soma)  // Sim. No lugar da soma ocorrerá a concatenação das variáveis primeiroNumero e segundoNumero.

3. let primeiroNumero = Number(prompt("Digite um numero!"))
let segundoNumero = Number(prompt("Digite outro numero!")) // Number() converterá a string em número.
*/

// Exercícios de interpretação de código
// 1.a 
let idadeDoUsuario = Number(prompt ("Digite sua idade"))

//1.b
let idadeMelhorAmigo = Number(prompt ("Digite a idade do seu melhor amigo(a)"))

//1.c 
console.log("Sua idade é maior do que a do seu melhor amigo?", idadeDoUsuario > idadeMelhorAmigo)

//1.d 
console.log("A diferença de idade é de:", idadeDoUsuario - idadeMelhorAmigo, "anos.")


//2.a 
let numeroPar = Number(prompt("Insira um número par"))

//2.b 
console.log(numeroPar % 2) 

//2.c
// O resultado do módulo (resto da divisão) será 0 porque todo número par é divisível por 2.

//2.d 
// O resultado do módulo (resto da divisão) sempre será 1.


//3
let idadeAnos = Number(prompt("Digite sua idade em anos"))
console.log(idadeAnos)

//3.a. IDADE EM MESES
console.log(idadeAnos * 12)

//3.b. IDADE EM DIAS 
console.log(idadeAnos * 365) 

//3.c IDADE EM HORAS
console.log(idadeAnos * 8760)

//4. 
let numero1 = Number(prompt("Digite um número"))
let numero2 = Number(prompt("Digite novamente um número"))
console.log("O primeiro numero é maior que segundo?", numero1 > numero2)
console.log("O primeiro numero é igual ao segundo?", numero1 === numero2) 
console.log("O primeiro numero é divisível pelo segundo?", numero1 % numero2 === 0)
console.log("O segundo numero é divisível pelo primeiro?", numero2 % numero1 === 0)