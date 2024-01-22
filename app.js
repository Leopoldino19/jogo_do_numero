alert('Boas vindas ao jogo do número secreto');
let numeroMaximo = 5000;

// Adicione um console.log para verificar o valor de "chute" após a entrada do usuário
let chute;

let tentativa = 1;

let numeroSecreto = parseInt(Math.random() * numeroMaximo + 1 );

// enquanto o chute não for igual ao n.s
 while(chute != numeroSecreto){

    chute = prompt(`Escolha um número entre 1 e ${numeroMaximo}`);

     if (chute == numeroSecreto) {
        break;
    } else {
         if(chute > numeroSecreto){
             alert("O número secreto é menor que "+ chute);
         }else{
             alert("O numero secreto é maior que "+ chute);
         }
         // numeros de tentativas 
         tentativa++
     }
 }

 let palavraTentativa = tentativa > 1 ? 'tentativas' : 'tentativa';
 alert(`Acertou número secreto ${numeroSecreto} com ${tentativa} ${palavraTentativa}.`);

// if(tentativa > 1){
//     alert('Acertou número secreto '+ numeroSecreto+ ` com ${tentativa} tentativas`);
// } else{
//     alert('Acertou número secreto '+ numeroSecreto+ ` como uma ${tentativa} tentativa`);
// }
