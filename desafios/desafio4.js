/*
Desafios finais
Crie um programa que utilize o console.log para exibir uma mensagem de boas-vindas. -------------

Crie uma variável chamada "nome" e atribua a ela o seu nome. Em seguida, utilize o console.log para exibir a mensagem "Olá, [seu nome]!" no console do navegador.-----------------

Crie uma variável chamada "nome" e atribua a ela o seu nome. Em seguida, utilize o alert para exibir a mensagem "Olá, [seu nome]!" .==========

Utilize o prompt e faça a seguinte pergunta: Qual a linguagem de programação que você mais gosta?. Em seguida, armazene a resposta em uma variável e mostre no console do navegador.===============================

Crie uma variável chamada "valor1" e outra chamada "valor2", atribuindo a elas valores numéricos de sua escolha. Em seguida, realize a soma desses dois valores e armazene o resultado em uma terceira variável chamada "resultado". Utilize o console.log para mostrar a mensagem "A soma de [valor1] e [valor2] é igual a [resultado]." no console.=====================

Crie uma variável chamada "valor1" e outra chamada "valor2", atribuindo a elas valores numéricos de sua escolha. Em seguida, realize a subtração desses dois valores e armazene o resultado em uma terceira variável chamada "resultado". Utilize o console.log para mostrar a mensagem "A diferença entre [valor1] e [valor2] é igual a [resultado]." no console.==============================

Peça ao usuário para inserir sua idade com prompt. Com base na idade inserida, utilize um if para verificar se a pessoa é maior ou menor de idade, exibindo uma mensagem apropriada no console.=====================

Crie uma variável "numero" e peça um valor com prompt verifique se é positivo, negativo ou zero. Use if-else para imprimir a respectiva mensagem.==============================

Use um loop while para imprimir os números de 1 a 10 no console.==============================

Crie uma variável "nota" e atribua um valor numérico a ela. Use if-else para determinar se a nota é maior ou igual a 7 e exiba "Aprovado" ou "Reprovado" no console.

Use o Math.random para gerar qualquer número aleatório e exiba esse número no console.

Use o Math.random para gerar um número inteiro entre 1 e 10 e exiba esse número no console.

Use o Math.random para gerar um número inteiro entre 1 e 1000 e exiba esse número no console.
*/

console.log('Boas vindas ao ultimo desafio')
// ------------------------------------------------------------
let nome = 'Pedro';
console.log(`Olá, ${nome}!`)
// ------------------------------------------------------------
alert(`Olá, ${nome}`)
// ------------------------------------------------------------
let linguagem = prompt('Qual a linguagem de programação que você mais gosta?')
console.log(`A linguagem de programação de que ${nome} gosta é ${linguagem}`)
// ------------------------------------------------------------
let valor1 = 8;
let valor2 = 2;
let resultado = valor1 + valor2;
let resultado2 = valor1 - valor2;
console.log(`A soma dos valores é ${resultado}`)
console.log(`A subtração dos valores é ${resultado2}`)
// ------------------------------------------------------------
let Idade = prompt("Digite sua idade")
if(Idade >= 18){
    console.log('Você é de maior')
}else{
    console.log('Você é de menor')
}
// ------------------------------------------------------------
let numero = prompt("digite um numero para saber se é positvo ou negativo");
if(numero == 0){
    alert(" O numero é 0");
}else{
    if(numero > 0){
        alert(" O numero é positivo");
    }else{
        alert(" O numero é negativo");
    }
}
// ------------------------------------------------------------
let numeroTeste = 0;
while(numeroTeste < 11){
    console.log(numeroTeste);
    numeroTeste++;
}

