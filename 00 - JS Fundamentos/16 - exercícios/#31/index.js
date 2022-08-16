/*
 *31) Escrever um algoritmo que percorre um vetor de inteiros, conta quantos
 *números negativos há nesse vetor e imprime a quantidade no console.

obs.: Era para mostrar os negativos, mas mostri tbm os positivos
 */

numeros = [
  1, 3, 5, 7, 9, 11, 13, 15, 16, 17, 18, 19, 21, 23, 25, 27, 29, 31, 33];

const qtdDeNumNegativos = (numeros) => {
  let negativos = 0;
  let positivos = 0
  for (let i = 0; i < numeros.length; i++) {
    if (numeros[i] % 2 !== 0) {
      negativos++;
    }else {
      positivos++;
    }
  }
  return `negativos = ${negativos} positivos = ${positivos}` ;
};

console.log(qtdDeNumNegativos(numeros));
