// Exercícios de interpretação de código
// 1. 
const filme = {
	nome: "Auto da Compadecida", 
	ano: 2000, 
	elenco: [
		"Matheus Nachtergaele", "Selton Mello", "Denise Fraga", 
		"Virginia Cavendish"
		], 
	transmissoesHoje: [
		{canal: "Telecine", horario: "21h"}, 
		{canal: "Canal Brasil", horario: "19h"}, 
		{canal: "Globo", horario: "14h"}
		]
}
// a. 
console.log(filme.elenco[0]) // Matheus Nachtergaele
console.log(filme.elenco[filme.elenco.length - 1]) // Virginia Cavendish
console.log(filme.transmissoesHoje[2]) // canal: Globo, horário: 14h 
// 2
const cachorro = {
	nome: "Juca", 
	idade: 3, 
	raca: "SRD"
}

const gato = {...cachorro, nome: "Juba"}

const tartaruga = {...gato, nome: gato.nome.replaceAll("a", "o")}
//a
console.log(cachorro) 
/* {nome: 'Juca', idade: 3, raca: 'SDR'
}
*/
console.log(gato) 
// {nome: 'Juba', idade: 3, raca: 'SDR'

console.log(tartaruga) 
/* 'Jubo', idade: 3, raca: 'SDR'}
*/
// b É chamada de aspalhamento ou spread, e ela realiza uma cópia do objeto ou array, e com isso, se pode modificar os dados presentes nessas estruturas.

// 3
function minhaFuncao(objeto, propriedade) {
	return objeto[propriedade]
}

const pessoa = {
  nome: "Caio", 
  idade: 23, 
  backender: false
}
//a. 
console.log(minhaFuncao(pessoa, "backender")) // False 
console.log(minhaFuncao(pessoa, "altura")) /* Undefined - Não foi declarada essa chave/valor, e
então não foi possível encontra-la, com isso, retorna undefined. */

// Exercícios de escrita de código 
// 1.a.
const dadosPessoais = {
    nome: 'Fernanda',
    apelidos: ["Fê", "Nanda", "Nandinha"]
}
function imprimirmMensagem(nome, apelidos) {
    return `Eu sou ${nome}, mas pode me chamar de ${dadosPessoais.apelidos[0]}, ${dadosPessoais.apelidos[1]}, ${dadosPessoais.apelidos[2]}`
}
console.log(imprimirmMensagem(dadosPessoais))

// 1.b 
const dadosPessoais1 = {
    ...dadosPessoais,
    apelidos: ['Fer', 'Fefê', 'Fernandinha']
}
console.log(imprimirmMensagem(dadosPessoais.nome, dadosPessoais1.apelidos))

//2.a.
const primeiraPessoa = {
    nome: 'Lis',
    idade: 24,
    profissao: 'advogada'
}
const segundaPessoa = {
    nome: 'Júlia',
    idade: 21, 
    profissao: 'técnica de enfermagem'
}

//2.b 
function retornarArray(pessoa) {
       const arrayInfos = [pessoa.nome, pessoa.nome.length, pessoa.idade, pessoa.profissao, pessoa.profissao.length]
    return arrayInfos
}
console.log(retornarArray(primeiraPessoa))
console.log(retornarArray(segundaPessoa))

//3.a
let carrinho = []

//3.b
const fruta1Sacolao = {
    nome: 'Banana',
    disponilidade: true
}

const fruta2Sacolao = {
    nome: 'Maçã', 
    disponibilidade: false 
}

const fruta3Sacolao = {
    nome: 'Laranja',
    disponibilidade: true 
}

//3.c 
function adicionarAoCarrinho(fruta1, fruta2, fruta3) {
const arrayFrutas = carrinho.push(fruta1, fruta2, fruta3)
return arrayFrutas
}
adicionarAoCarrinho(fruta1Sacolao.nome, fruta2Sacolao.nome, fruta3Sacolao.nome)

//3.d 
console.log(carrinho)