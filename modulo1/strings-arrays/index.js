/* Exercícios de interpretação de código */
//1.
let array
console.log('a. ', array) // a. undefined 

array = null
console.log('b. ', array) // b. null 

array = [3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13]
console.log('c. ', array.length) // c. 11

let i = 0
console.log('d. ', array[i]) // d. 3

array[i+1] = 19
console.log('e. ', array) // e. [3, 19, 5, 6, 7, 8, 9, 10, 11, 12, 13]

const valor = array[i+6]
console.log('f. ', valor) // f. 9

2. 
const frase = prompt("Digite uma frase")
console.log(frase.toUpperCase().replaceAll("A", "I"), frase.length) // SUBI NUM ÔNIBUS EM MIRROCOS, 27 

/* Exercícios de escrita de código */
// 1. 
let nomeDoUsuario = prompt("Digite seu nome")
let emailDoUsuario = prompt("Digite seu email")
console.log(`O email do ${emailDoUsuario} foi cadastrado com sucesso! Seja bem-vindo(a), ${nomeDoUsuario}!`)

//2 
let comidasPreferidas = ["Comida Japonesa", "Camarão", "Batata frita", "Churrasco", "Hambúrguer"]
//a 
console.log(comidasPreferidas)

//b
console.log(`Essas são as minhas comidas preferidas: 
${comidasPreferidas[0]}
${comidasPreferidas[1]}
${comidasPreferidas[2]}
${comidasPreferidas[3]}
${comidasPreferidas[4]}`)   

//c 
let favoriteFood = prompt("Qual sua comida preferida?")
comidasPreferidas[1] = favoriteFood

//3.a 
let listaDeTarefas = []

//3.b
let resposta1 = prompt("1. Me fale uma tarefa que você precisa realizar hoje")
let resposta2 = prompt("2. Me fale uma tarefa que você precisa realizar hoje")
let resposta3 = prompt("3. Me fale uma tarefa que você precisa realizar hoje")
listaDeTarefas.push(resposta1)
listaDeTarefas.push(resposta2)
listaDeTarefas.push(resposta3)

//3.c 
console.log(listaDeTarefas)

//3.d 
let tarefaRealizada = Number(prompt("Informe o índice da tarefa realizada: 0, 1, 2"))
console.log(tarefaRealizada)

//3.e 
listaDeTarefas.splice(tarefaRealizada,1)

//3.f
console.log(listaDeTarefas)