/**
 * 29) Utilizando a estrutura de repetição for, faça uma função que percorra um
 * vetor e conte quantos números deste vetor estão no intervalo [10,20]
 * (repare que o intervalo é fechado, ou seja, inclui o 10 e o 20) e quantos
 * deles estão fora do intervalo, escrevendo estas informações.
 */

const qtsDentroqtsFora = () => {
  dentro = 0, fora = 0;
  numeros = [
    1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21,
    22, 23, 24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40];
  for (i = 0; i < numeros.length; i++) {
    if (numeros[i] >= 10 && numeros[i] <= 20) {
      dentro++;
    } else {
      fora++;
    }
  }
  soma = dentro + fora
  console.log(`dentro: ${dentro}`);
  console.log(`fora: ${fora}`);
  console.log(`Prova real = O intervalo fora + o intervalor dentro é= ${soma}`);

};
qtsDentroqtsFora();