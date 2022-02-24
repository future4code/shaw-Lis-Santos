// Exercícios de interpretação de código

//1. 
    nome: 'Amanda Rangel', apelido: 'Mandi' } 0 [
    {nome: 'Amanda Rangel', apelido: 'Mandi' },
    {nome: 'Laís Petra', apelido: 'Laura' },
    {nome: 'Letícia Chijo', apelido: 'Chijo' }
  ]
  { nome: 'Laís Petra', apelido: 'Laura' } 1 [
    { nome: 'Amanda Rangel', apelido: 'Mandi' },
    { nome: 'Laís Petra', apelido: 'Laura' },
    { nome: 'Letícia Chijo', apelido: 'Chijo' }
  ]
  { nome: 'Letícia Chijo', apelido: 'Chijo' } 2 [
    { nome: 'Amanda Rangel', apelido: 'Mandi' },
    { nome: 'Laís Petra', apelido: 'Laura' },
    { nome: 'Letícia Chijo', apelido: 'Chijo' }
  ]

//2.
 const usuarios = [
  { nome: "Amanda Rangel", apelido: "Mandi" },
  { nome: "Laís Petra", apelido: "Laura" },
  { nome: "Letícia Chijo", apelido: "Chijo" },
]

const novoArrayB = usuarios.map((item, index, array) => {
   return item.nome
})

console.log(novoArrayB) 
//a. 
['Amanda Rangel', 'Laís Petra', 'Letícia Chijo']

//3
const usuarios = [
    { nome: "Amanda Rangel", apelido: "Mandi" },
    { nome: "Laís Petra", apelido: "Laura" },
    { nome: "Letícia Chijo", apelido: "Chijo" },
  ]
  
  const novoArrayC = usuarios.filter((item, index, array) => {
     return item.apelido !== "Chijo"
  })
  
  console.log(novoArrayC)

//a 
[
    { nome: 'Amanda Rangel', apelido: 'Mandi' },
    { nome: 'Laís Petra', apelido: 'Laura' }
  ]

// Exercício de escrita de código
//1.
const pets = [
    { nome: "Lupin", raca: "Salsicha"},
    { nome: "Polly", raca: "Lhasa Apso"},
    { nome: "Madame", raca: "Poodle"},
    { nome: "Quentinho", raca: "Salsicha"},
    { nome: "Fluffy", raca: "Poodle"},
    { nome: "Caramelo", raca: "Vira-lata"},
 ]
 //a.
 const nomeDogs = pets.map((item) => {
    return item.nome
 })
 console.log(nomeDogs)

 //b. 
 const filtrarRaca = pets.filter((item) => {
     return item.raca === "Salsicha"
 })
 console.log(filtrarRaca)

//c. 
const enviarMensagem = pets.filter((item) => {
    if(item.raca === "Poodle") {
        return item
    }
})
const mostrarNaTela = enviarMensagem.map((item) => {
return `Você ganhou um cupom de desconto de 10% para tosar o/a ${item.nome}!`
})
console.log(enviarMensagem)

//2
const produtos = [
    { nome: "Alface Lavada", categoria: "Hortifruti", preco: 2.5 },
    { nome: "Guaraná 2l", categoria: "Bebidas", preco: 7.8 },
    { nome: "Veja Multiuso", categoria: "Limpeza", preco: 12.6 },
    { nome: "Dúzia de Banana", categoria: "Hortifruti", preco: 5.7 },
    { nome: "Leite", categoria: "Bebidas", preco: 2.99 },
    { nome: "Cândida", categoria: "Limpeza", preco: 3.30 },
    { nome: "Detergente Ypê", categoria: "Limpeza", preco: 2.2 },
    { nome: "Vinho Tinto", categoria: "Bebidas", preco: 55 },
    { nome: "Berinjela kg", categoria: "Hortifruti", preco: 8.99 },
    { nome: "Sabão em Pó Ypê", categoria: "Limpeza", preco: 10.80 }
 ]
 //a 
 const nomeProdutos = produtos.map((item) => {
     return item.nome
 })
 console.log(nomeProdutos)
//b
const nome = produtos.map((item) => {
    return item.nome
}) 
console.log(nome)

const preco = produtos.map((item) => {
    return item.preco * (0,95)
})
console.log(preco)

const novoArray = produtos.map((item) => {
    return {
        nome: item.nome,
        precoComDesconto: (item.preco * 0.95).toFixed(2)
    }
})
console.log(novoArray)

//c
const categoriaBebidas = produtos.filter((item) => {
    return item.categoria === "Bebidas"
})
console.log(categoriaBebidas)

//d
const nomeYpe = produtos.filter((item) => {
    if (item.nome.includes('Ypê'))
    return item.nome
})
console.log(nomeYpe)

//e
const novoArrayFrase = produtos.filter((item) => {
    if (item.nome.includes('Ypê')) {
    return item
}
})
const mostraTela = novoArrayFrase.map((item) =>{
    return `Compre ${item.nome} por ${item.preco}`
})
console.log(mostraTela)