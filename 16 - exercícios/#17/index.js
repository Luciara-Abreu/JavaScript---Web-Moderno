/**
17) Um funcionário irá receber um aumento de acordo com o seu plano de
trabalho, de acordo com a tabela abaixo:
Plano Aumento
A 10%
B 15%
C 20%
Faça uma função que leia o plano de trabalho e o salário atual de um funcionário e calcula e imprime o seu
novo salário. Use a estrutura switch e faça um caso default que indique que o plano é inválido.
 */

const aumentoSalario = (salarioAtual,plano) => {
  switch (salarioAtual,plano) {
    case "A":
      console.log(`O salario atual com aumento de 10% será de =`,
        novoSalario = salarioAtual  * 1.1
      );
      break;
    case "B":
      console.log(`O salario atual com aumento de 10% será de  =`,
      novoSalario = salarioAtual * 1.15
      );
      break;
    case "C":
      console.log(`O salario atual com aumento de 10% será de  =`,
      novoSalario = salarioAtual * 1.2
      );
      break;
    default:
      console.log("Opção invalida");
  }
};

aumentoSalario(1000, "A");
aumentoSalario(1000, "B");
aumentoSalario(1000, "C");
