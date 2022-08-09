/**
23) Escreva um algoritmo que leia o código de um aluno e suas três notas. Calcule a 
média ponderada do aluno, considerando que o peso para a maior nota seja 4 e para 
as duas restantes, 3. Mostre o código do aluno, suas três notas, a média calculada 
e uma mensagem "APROVADO" se a média for maior ou igual a 5 e "REPROVADO" se a média 
for menor que 5. Repita a operação até que o código lido seja negativo.
 */

const notasFinais =(codAluno, n1,n2,n3) =>{
  media = (n1 + n2 + n3)/3
  if(media >=5){
    return `O Aluno ${codAluno} foi aprovado pois sua média ficou em = ${media}, maior ou iagual a 5`
  }else{
    return`O Aluno ${codAluno} foi reprovado pois sua média ficou em = ${media}, abaixo de 5`
  }
}
console.log(notasFinais(0037,5,6,5))

// if ternário

const notasFinais2 = (codAluno, n1, n2, n3) => {
  media = (n1 + n2 + n3) / 3;
  console.log(
    `O  Aluno: ${codAluno} foi ${media < 5 ? "Reprovado" : "Aprovado"}, sua média é de ${media}`
  );
};

console.log(notasFinais2(121, 5, 5, 7));
