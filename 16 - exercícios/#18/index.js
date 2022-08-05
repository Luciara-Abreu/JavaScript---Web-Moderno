/*
18) Faça um programa que leia um número entre 0 e 10, e escreva este número por extenso. Use o comando
switch. Crie um case default que escreva ‘Número fora do intervalo.’
*/

const escreverNumero = (numero) => {
  switch (numero) {
    case 0:
      return "Numero em português zero or zero";
      break;
    case 1:
      return "Numero em português um em ingles one";
      break;
    case 2:
      return "Numero em português dois em ingles twoo";
      break;
    case 3:
      return "Numero em português tres em ingles three";
      break;
    case 4:
      return "Numero em português quatro em ingles four";
      break;
    case 5:
      return "Numero em português cinco em ingles five";
      break;
    case 6:
      return "Numero em português seis em ingles six";
      break;
    case 7:
      return "Numero em português sete em ingles seven";
      break;
    case 8:
      return "Numero em português oito em ingles eigth";
      break;
    case 9:
      return "Numero em português nove em ingles nine";
      break;
    case 10:
      return "Numero em português dez em ingles tem";
      break;
    default:
      return "numero em português invalido";
  }
};
console.log(escreverNumero(8));
