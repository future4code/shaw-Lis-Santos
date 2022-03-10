/**
 * EXEMPLO DE UTILIZAÇÃO DA 'comprarCarta'
 * 
 * 
    const carta = comprarCarta(); // Sorteia uma carta. Por exemplo, o rei de ouros
    
    console.log(carta.texto) // imprime o texto da carta. Exemplo: "K♦️" (indica "K" de ouros)
    console.log(carta.valor) // imprime o valor da carta (um número). Exemplo: 10 (dado que "K" vale 10)
 * 
 * 
 * 
 */

console.log("Boas vindas ao jogo de Backjack!")

if(confirm("Deseja iniciar uma nova rodada?")){
   novaRodada()
} else {
   console.log("O jogo acabou!")
}

function novaRodada() {
   const cartaUsuario1 = comprarCarta()
   console.log(`A primeira carta tirada pelo usuário foi: ${cartaUsuario1.texto}`)
   const cartaUsuario2 = comprarCarta()
   console.log(`A segunda carta tirada pelo usuário foi: ${cartaUsuario2.texto}`)
   const somaUsuario = cartaUsuario1.valor + cartaUsuario2.valor
   console.log(`A soma das cartas retiradas pelo usuario resultaram no valor: ${somaUsuario}`)
   console.log(`Usuário - cartas: ${cartaUsuario1.texto} ${cartaUsuario2.texto} - Pontuação ${somaUsuario}`)
   

   const cartaComputador1 = comprarCarta()
   console.log(`A primeira carta tirada pelo computador foi: ${cartaComputador1.texto}`)
   const cartaComputador2 = comprarCarta()
   console.log(`A segunda carta tirada pelo computador foi: ${cartaComputador2.texto}`)
   const somaComputador = cartaComputador1.valor + cartaComputador2.valor
   console.log(`A soma das cartas retiradas pelo computador resultaram no valor: ${somaComputador}`)
   console.log(`Computador - ${cartaComputador1.texto} ${cartaComputador2.texto} - Pontuação: ${somaComputador}`)

 
   definirVencedor(somaUsuario, somaComputador)

}

function definirVencedor(somaUsuario, somaComputador){
   if(somaUsuario > somaComputador) {
      console.log("Parabéns, usuário! A sorte está a seu favor =)")
      } else if (somaComputador > somaUsuario) {
      console.log("Que pena, o computador venceu! Tente mais uma vez.")
      } else if (somaUsuario === somaComputador) {
      console.log("Deu empate!")
      }
}