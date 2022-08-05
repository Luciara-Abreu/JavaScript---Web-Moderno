/*
Criar um programa para identificar o valor a ser pago por um plano de saúde dada
a idade do conveniado considerando que todos pagam R$ 100 mais um adicional 
conforme a seguinte tabela: 
1) crianças com menos de 10 anos pagam R$80;
2) conveniado com idade entre 10 e 30 anos pagam R$50; 
3) conveniado com idade acima de 30 e até 60 anos pagam R$ 95; e 
4) conveniado acima de 60 anos pagam R$130
*/

const convenio = (idade) => {
  if (idade >= 60) {
    console.log(" R$130,00");
  } else if (idade >= 30 && idade < 60) {
    console.log(" R$ 95,00");
  } else if (idade >= 10 && idade < 30) {
    console.log(" R$50,00");
  } else if (idade < 10) {
    console.log(" R$80.00");
  } else{
    'idade indefinida, tente novamente.'
  }
};
console.log(convenio(60));
