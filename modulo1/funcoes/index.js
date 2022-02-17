/* Exercícios de interpretação de código 
1. 

function minhaFuncao(variavel) {
	return variavel * 5
}
//1.a
console.log(minhaFuncao(2)) // 10
console.log(minhaFuncao(10)) // 50

//1.b
// Não apareceria nada, pois não foi chamada a função para imprimir o código

//2.
let textoDoUsuario = prompt("Insira um texto");

const outraFuncao = function(texto) {
	return texto.toLowerCase().includes("cenoura")
}

const resposta = outraFuncao(textoDoUsuario)
console.log(resposta)
/* a. 
A função coloca o texto do usuário todo em minúsculo e procura se a palavra cenoura se encontra na string,
retornando verdadeiro ou falso. 

b.i
true. 

b.ii
true

b.iii
false 


Exercícios de escrita de código */
// 1.a 
function InformacoesPessoais () {
    let sobreMim = "Eu me chamo Lis, tenho 24 anos, moro em Carmo/RJ e sou estudante"
    console.log(sobreMim)
}

InformacoesPessoais()

//1.b 
let nome = "Lis"
let idade = 24
let cidade = "Carmo"
let profissao = "advogada"

function dadosPessoais(nome, idade, cidade, profissao) {
    return `Eu sou ${nome}, tenho ${idade} anos, moro em ${cidade} e sou ${profissao}`
}
const frase = dadosPessoais(nome, idade, cidade, profissao)
console.log(frase)

//2
//a.
let a = 1
let b = 2
    function somaNumeros(a, b) {
        let soma = a + b
    return soma
}
const somar = somaNumeros(a,b)
console.log(somar)

//b. 
let n1 = 3
let n2 = 5
function trueORFalse(n1, n2) {
    return n1 >= n2
}
const resposta = trueORFalse(n1, n2)
console.log(resposta)

//c 
let numero = 3
function descobrir (numero) {
    if (numero % 2 === 0) {
    return true 
    } else 
   return false }

const resultado = descobrir(numero)
console.log(resultado)

//d 

let mensagem = "Olá, tudo bem?"
function escrever(mensagem) {
  let novaMensagem =  mensagem.toUpperCase()
  console.log(novaMensagem)
    }
escrever("Olá, tudo bem?")
let mensagem2 = mensagem.length
console.log(mensagem2)

}


//3. 
const respostasUsuario = []
let numeroUsuario1 = Number(prompt("Insira um número"))
let numeroUsuario2 = Number(prompt("Insira novamente um número"))
respostasUsuario.push(numeroUsuario1)
respostasUsuario.push(numeroUsuario2)
console.log(respostasUsuario)

function somaNumeros(numeroUsuario1, numeroUsuario2) {
    let soma = numeroUsuario1 + numeroUsuario2
return soma
}
let somar = somaNumeros(numeroUsuario1,numeroUsuario2)
console.log(somar)


function subtracaoNumeros(numeroUsuario1, numeroUsuario2) {
let subtracao = numeroUsuario1 - numeroUsuario2
return subtracao
}
let subtrair = subtracaoNumeros(numeroUsuario1,numeroUsuario2)
console.log(subtrair)

function multiplicacaoNumeros (numeroUsuario1,numeroUsuario2) {
let multiplicacao = numeroUsuario1 * numeroUsuario2 
return multiplicacao
}
let multiplicar = multiplicacaoNumeros(numeroUsuario1,numeroUsuario2)
console.log(multiplicar)

function divisaoNumeros (numeroUsuario1,numeroUsuario2) {
let divisao = numeroUsuario1 / numeroUsuario2
return divisao
}
let dividir = DivisaoNumeros(numeroUsuario1,numeroUsuario2)
console.log(dividir)

somaNumeros(respostasUsuario)
subtracaoNumeros(respostasUsuario)
multiplicacaoNumeros(respostasUsuario)
divisaoNumeros(respostasUsuario)