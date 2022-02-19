// EXEMPLOS DE IMPLEMENTAÇÃO ---------------------------------------------------------------

// EXERCÍCIO 0A
function soma(num1, num2) {
  // implemente sua lógica aqui
  return num1 + num2
}

// EXERCÍCIO 0B
function imprimeMensagem() {
  // implemente sua lógica aqui
  const mensagem = prompt('Digite uma mensagem!')

  console.log(mensagem)
}

// EXERCÍCIOS PARA FAZER ------------------------------------------------------------------

// EXERCÍCIO 01
function calculaAreaRetangulo(altura, largura) {
let altura = Number(prompt("Informe a altura de um retângulo"))
let largura = Number(prompt("Informe a base de um retãngulo"))
let area = altura * largura 
console.log(area)
}

// EXERCÍCIO 02
function imprimeIdade(anoAtual, anoNascimento, idade) {
let anoAtual = Number(prompt("Informe o ano atual"))
let anoNascimento = Number(prompt("Informe seu ano de nascimento"))
let idade = anoAtual - anoNascimento
console.log(idade)
}

// EXERCÍCIO 03
function calculaIMC(peso, altura) {
let peso = Number(prompt("Informe seu peso"))
let altura = Number(prompt("Informe sua altura"))
  return peso / (altura * altura)
}

// EXERCÍCIO 04
function imprimeInformacoesUsuario() {
let nome = prompt("Digite seu nome")
let idade = Number(prompt("Digite sua idade"))
let email = prompt("Informe seu email")
console.log(`Meu nome é ${nome}, tenho ${idade} anos, e o meu email é ${email}.`)
}

// EXERCÍCIO 05
function imprimeTresCoresFavoritas() {
const coresFavoritas = []
let cor1 = prompt("Informe sua 1ª cor favorita")
let cor2 = prompt("Informe sua 2ª cor favorita")
let cor3 = prompt("Informe sua 3ª cor favorita")
coresFavoritas.push(cor1, cor2, cor3)
console.log(coresFavoritas)
}

// EXERCÍCIO 06
function retornaStringEmMaiuscula(string) {
let string = prompt("Digite um texto")
  return string.toUpperCase()
}

// EXERCÍCIO 07
function calculaIngressosEspetaculo(custo, valorIngresso) {
custo = prompt("Digite o valor do espetáculo")
valorIngresso = prrompt("Digite o valor do ingresso")
  return custo / valorIngresso
}

// EXERCÍCIO 08
function checaStringsMesmoTamanho(string1, string2) {
let string1 = toString(prompt("Digite um texto"))
let string2 = toString(prompt("Digite novamente um texto"))
let novaString1 = string1.length
let novaString2 = string2.length
if (novaString1 === novaString2) {
  return true
} else
return false 
}

// EXERCÍCIO 09
function retornaPrimeiroElemento(array) {
let array = []
let elemento1 = prompt("1. Digite um elemento")
let elemento2 = prompt("2. Digite um elemento")
let elemento3 = prompt("3. Digite um elemento")
let elemento4 = prompt("4. Digite um elemento")
array.push(elemento1, elemento2, elemento3, elemento4)
  return array[0]
}

// EXERCÍCIO 10
function retornaUltimoElemento(array) {
let array = []
let elemento1 = prompt("1. Digite um elemento")
let elemento2 = prompt("2. Digite um elemento")
let elemento3 = prompt("3. Digite um elemento")
let elemento4 = prompt("4. Digite um elemento")
array.push(elemento1, elemento2, elemento3, elemento4)
  return (array.length) -1
}

// EXERCÍCIO 11
function trocaPrimeiroEUltimo(array) {
let array = []
let elemento1 = prompt("1. Digite um elemento")
let elemento2 = prompt("2. Digite um elemento")
let elemento3 = prompt("3. Digite um elemento")
let elemento4 = prompt("4. Digite um elemento")
array.push(elemento1, elemento2, elemento3, elemento4)
  return array.reverse()
}

// EXERCÍCIO 12
function checaIgualdadeDesconsiderandoCase(string1, string2) {
let string1 = prompt("Digite um texto")
let string2 = prompt("Digite um texto")
let novaString1 = string1.toUpperCase()
let novaString2 = string2.toUpperCase()
  if (novaString1 === novaString2) {
  return true
  } else
  return false
}
// DESAFIOS 

// EXERCÍCIO 13
function checaRenovacaoRG() {
let anoAtual = Number(prompt("Informe o ano atual"))
let anoNascimento = Number(prompt("Informe em qual ano você nasceu"))
let anoEmissaoRg = Number(prompt("Em qual ano sua carteira de identidade foi emitida?"))
  if(anoAtual - anoNascimento <= 20, anoAtual - anoEmissaoRg >= 5) {
  return true 
  } else 
  return false 
  }
  console.log(checaRenovacaoRG(anoAtual, anoNascimento, anoEmissaoRg))

function checaRenovacaoRG() {
let anoAtual = prompt("Informe o ano atual")
let anoNascimento = prompt("Informe em qual ano você nasceu")
let anoEmissaoRg = prompt("Em qual ano sua carteira de identidade foi emitida?")
  if( 20 < anoAtual - anoNascimento <= 50 , anoAtual - anoEmissaoRg >= 10) {
  return true 
  } else 
  return false 
  }
  console.log(checaRenovacaoRG(anoAtual, anoNascimento, anoEmissao))

function checaRenovacaoRG() {
let anoAtual = prompt("Informe o ano atual")
let anoNascimento = prompt("Informe em qual ano você nasceu")
let anoEmissaoRg= prompt("Em qual ano sua carteira de identidade foi emitida?")
if(anoAtual - anoNascimento > 50 , anoAtual - anoEmissaoRg >= 15) {
  return true 
  } else 
  return false 
  }
  console.log(renovar(anoAtual, anoNascimento, anoEmissao))

// EXERCÍCIO 14
function checaAnoBissexto(ano) {
let ano = prompt("Insira um ano")
let condicao = ano % 400 === 0
let condicao1 = (anoBissexto % 4 === 0) && (ano % 100 !== 0 && !condicao)
if (condicao, condicao1) {
  return true
} else
return false 
}

// EXERCÍCIO 15
function checaValidadeInscricaoLabenu() {
let perguntas = []
let aviso = alert("RESPONDA APENAS COM SIM OU NÃO")
let pergunta1 = prompt("Você tem mais de 18 anos?").toUpperCase
let pergunta2 = prompt("Você possui ensino médio completo?").toUpperCase
let pergunta3 = prompt("Você possui disponibilidade exclusiva durante os horários do curso?").toUpperCase
  if (pergunta1, pergunta2, pergunta3 === 'sim'.toUpperCase) {
    return true
} else
return false
}
console.log(checaValidadeInscricaoLabenu(pergunta1, pergunta2, pergunta3))