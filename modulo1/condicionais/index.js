// Exercícios de interpretação de código 
// 1.
const respostaDoUsuario = prompt("Digite o número que você quer testar")
const numero = Number(respostaDoUsuario)

if (numero % 2 === 0) {
  console.log("Passou no teste.")
} else {
  console.log("Não passou no teste.")
}

//a 
/* Realiza o teste se o número é par ou não. Caso ele seja, vai imprimir no console "Passou no teste", senão, ou seja, o número sendo
ímpar, vai imprimir "Não passou no teste". */

//b 
// Números pares

//c
// Números ímpares

//2
let fruta = prompt("Escolha uma fruta")
let preco
switch (fruta) {
  case "Laranja":
    preco = 3.5
    break;
  case "Maçã":
    preco = 2.25
    break;
  case "Uva":
    preco = 0.30
    break;
  case "Pêra":
    preco = 5.5
    break; // BREAK PARA O ITEM c.
  default:
    preco = 5
    break;
}
console.log("O preço da fruta ", fruta, " é ", "R$ ", preco)

/* a. 
Para imprimir o preço de acordo com a fruta digitada no prompt pelo usuário.

b. 
O preço da fruta, maça, é, R$, 2.25

c. O preço da fruta, pêra, é, R$, 5

*/

//3 
const numero = Number(prompt("Digite o primeiro número."))

if(numero > 0) {
  console.log("Esse número passou no teste")
	let mensagem = "Essa mensagem é secreta!!!"
}

console.log(mensagem)

/* a 
Declarando uma variável interativa, que necessariamente tem que ser um número.
 
b. (10) - Esse número passou no teste. (-10) - Esse número não passou no teste.

c. Sim. Pois a variável "mensagem" foi declarada dentro do escopo local da funçã0, e a tentativa de acesso está sendo
no escopo geral.
*/

// Exercícios de escrita de código
//1.
//a 
let idade = prompt("Informe sua idade")

//b 
let idade = Number(prompt("Informe sua idade"))

//c
if (idade >= 18) {
    console.log('Você pode dirigir') 
} else {
    console.log("Você não pode dirigir")
}

//2. 
alert("Digite M (matutino), V (vespertino) ou N (noturno)")
let turno = prompt("Digite M (matutino), V (vespertino) ou N (noturno)")
    if (turno === 'M') {
        console.log('Bom dia!') 
    } else if (turno === 'V') {
    console.log('Boa tarde!') 
    } else if (turno === 'N') {
        console.log('Boa noite!')
    }

//3. 
alert("Digite M (matutino), V (vespertino) ou N (noturno)")
let turno1 = prompt("Digite M (matutino), V (vespertino) ou N (noturno)")
    switch (turno1) {
        case "=== M":
            console.log("Bom dia!") 
            break
        case "=== V":
            console.log("Boa tarde!")
            break
        case "=== N":
            console.log("Boa noite!") 
    }
                    
//4. 
let generoFilme = prompt("Qual o gênero do filme?").toUpperCase
let precoIngresso = Number(prompt("Qual o preço do ingresso?"))

    if (generoFilme === "fantasia".toUpperCase && precoIngresso < 15) {
        console.log("Bom filme!")
    } else {
    console.log("Escolha outro filme :(")
    }