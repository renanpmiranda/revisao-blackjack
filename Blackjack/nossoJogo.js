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

const isIniciarRodada = confirm("Quer iniciar uma nova rodada?")

if (isIniciarRodada) {
   // 1) sortear as cartas para jogador e computador (2 para cada)
   // 2) comparar valores
   // 3) imprimir o vencedor ou empate

   console.log("Boas vindas ao jogo!")

   const cartaJogador1 = comprarCarta()
   console.log(cartaJogador1.texto)
   const cartaJogador2 = comprarCarta()
   console.log(cartaJogador2.texto)

   const totalJogador = cartaJogador1.valor + cartaJogador2.valor
   console.log(`Total do jogador: ${totalJogador}`)

   const cartaComputador1 = comprarCarta()
   console.log(cartaComputador1.texto)
   const cartaComputador2 = comprarCarta()
   console.log(cartaComputador2.texto)

   const totalComputador = cartaComputador1.valor + cartaComputador2.valor
   console.log(`Total do computador: ${totalComputador}`)
   
   if(totalJogador > totalComputador){
      console.log("O jogador venceu!")
   }else if(totalJogador < totalComputador){
      console.log("O computador venceu!")
   }else{
      console.log("Empate!")
   }

} else {
   console.log("O jogo acabou.")
}