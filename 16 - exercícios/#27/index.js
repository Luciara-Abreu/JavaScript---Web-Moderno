/**
 * 27) Construa uma função que receba como parâmetros as alturas e as taxas de
 * crescimento anuais de duas crianças e calcule se existe uma criança menor,
 * caso exista se a criança menor ultrapassará a maior e em quantos anos isso
 * acontecerá. Utilize centímetros para as unidades de medida.
 */

// Exercicio copiado. 
const quantidadeDeAnos = (alturaCriançaA, taxaA, alturaCriançaB, taxaB) => {
  let anos = 0;
  while (alturaCriançaA < alturaCriançaB) {
    alturaCriançaA += taxaA;
    alturaCriançaB += taxaB;
    anos++;
  }
  return anos;
};


const calcularCrescimento = (alturaCriançaA, taxaA, alturaCriançaB, taxaB) => {
  if (alturaCriançaA == alturaCriançaB) {
    if (taxaA > taxaB) {
      return "A criança 1 ultrapassará a criança 2 em um ano";
    } else if (taxaA < taxaB) {
      return "A criança 2 ultrapassará a criança 1 em um ano";
    } else {
      return "As crianças tem igual altura e crescimento.";
    }
  } else {
    if (alturaCriançaA > alturaCriançaB) {
      if (taxaA >= taxaB) {
        return "A criança menor não ultrapassará a maior.";
      } else {
        return `A criança menor ultrapassará a maior em ${quantidadeDeAnos(alturaCriançaB,taxaB,alturaCriançaA,taxaA)} anos`;
      }
    } else {
      if (taxaA <= taxaB) {
        return "A criança menor não ultrapassará a maior.";
      } else {
        return `A criança menor ultrapassará a maior em ${quantidadeDeAnos(alturaCriançaA,taxaA,alturaCriançaB,taxaB)} anos`;
      }
    }
  }
}
console.log(calcularCrescimento(150, 2, 130, 4));