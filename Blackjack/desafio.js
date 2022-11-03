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

function blackjack(){

   const isIniciarRodada = confirm("Boas vindas ao jogo de Blackjack! Quer iniciar uma nova rodada?")
   
   if(isIniciarRodada === true){  
      
      const cartasJogador = []

      let primeiraCartaJogador = comprarCarta()
      let segundaCartaJogador = comprarCarta()

      while(primeiraCartaJogador.texto.includes("A") && segundaCartaJogador.texto.includes("A")){
         primeiraCartaJogador = comprarCarta()
         segundaCartaJogador = comprarCarta()
      }
    
      cartasJogador.push(primeiraCartaJogador)   
      cartasJogador.push(segundaCartaJogador) 
      
      let totalJogador = cartasJogador[0].valor + cartasJogador[1].valor
            
      const cartasComputador = []

      let primeiraCartaComputador = comprarCarta()
      let segundaCartaComputador = comprarCarta()

      while(primeiraCartaComputador.texto.includes("A") && segundaCartaComputador.texto.includes("A")){
         primeiraCartaComputador = comprarCarta()
         segundaCartaComputador = comprarCarta()
      }

      cartasComputador.push(primeiraCartaComputador)  
      cartasComputador.push(segundaCartaComputador)

      let totalComputador = cartasComputador[0].valor + cartasComputador[1].valor
      
      const cartasJogadorStr = cartasJogador.map((carta) => {
         return carta.texto
      })     
      
      const cartasComputadorStr = cartasComputador.map((carta) => {
         return carta.texto
      })

      while(totalJogador < 21 &&
      confirm(`Suas cartas são ${cartasJogadorStr.join("")}. A carta revelada do computador é ${cartasComputador[0].texto}. Deseja comprar mais uma carta?`)
      ){
         const cartaComprada = comprarCarta()
         cartasJogador.push(cartaComprada)
         cartasJogadorStr.push(cartaComprada.texto)
         totalJogador += cartaComprada.valor

         if(totalJogador == 21){
            break
         }

         if(totalJogador > 21){
            alert(`
            Você estorou! 
            Usuário - cartas: ${cartasJogadorStr} - pontuação ${totalJogador} 
            Computador - cartas: ${cartasComputadorStr} - pontuação ${totalComputador} 
            O computador venceu!
            `)
            return
         }
      }      

      while(totalComputador < totalJogador){
         const cartaComprada = comprarCarta()
         cartasComputador.push(cartaComprada)
         cartasComputadorStr.push(cartaComprada.texto)
         totalComputador += cartaComprada.valor

         if(totalComputador == 21) {
            break
         }

         if(totalComputador > 21){
            alert(`
            O computador estorou! 
            Usuário - cartas: ${cartasJogadorStr} - pontuação ${totalJogador} 
            Computador - cartas: ${cartasComputadorStr} - pontuação ${totalComputador} 
            Você venceu!
            `)
            return
         }
      }
         
      if(totalComputador > totalComputador){
          alert(`
          Usuário - cartas: ${cartasJogadorStr} - pontuação ${totalJogador}
          Computador - cartas: ${cartasComputadorStr} - pontuação ${totalComputador}
          Você ganhou!
          `)                   
      }else if(totalJogador < totalComputador){
          alert(`
          Usuário - cartas: ${cartasJogadorStr} - pontuação ${totalJogador}
          Computador - cartas: ${cartasComputadorStr} - pontuação ${totalComputador}
          O computador ganhou!
          `)          
      }else{
          alert(`
          Usuário - cartas: ${cartasJogadorStr} - pontuação ${totalJogador}
          Computador - cartas: ${cartasComputadorStr} - pontuação ${totalComputador}
          Empate!
          `)          
      }
   }  
}

blackjack()   