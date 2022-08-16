/**
16) Utilizando a estrutura do Switch faça um programa que simule uma calculadora 
básica. O programa recebe como parâmetros dois valores numéricos e uma string 
referente à operação e a realize com os valores

numéricos na ordem que foram inseridos. Por exemplo: calculadora (2, ‘+’, 3). 
A função efetuará a soma de 2 e 3. Dica: Os sinais das operações são: 
‘+’. ‘-’, ‘*’ e ‘/’. Crie um caso default para operações inválidas.
 */

const calculadora = (nu1, nu2, operacao) => {
  console.log("Escolha dois numeros para efetuar o calclulo e a operação");
  switch ((nu1, nu2, operacao)) {
    case "soma":
      console.log(`A soma do ${nu1} e do ${nu2} é  =`, (soma = nu1 + nu2));
      break;
    case "subtração":
      console.log(
        `A subtração do ${nu1} e do ${nu2} é  =`,
        (subtracao = nu1 - nu2)
      );
      break;
    case "multiplicação":
      console.log(
        `A multiplicação do ${nu1} e do ${nu2} é  =`,
        (multiplicacao = nu1 * nu2)
      );
      break;
    case "divisão":
      console.log(
        `A divisão do ${nu1} e do ${nu2} é  =`,
        (divisao = nu1 / nu2)
      );
      break;
    default:
      console.log("Operação invalida");
  }
};

calculadora(200, 2, "multiplicação");
