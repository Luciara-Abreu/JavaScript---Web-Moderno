/**
 * 30) Escreva um algoritmo que percorre um vetor de inteiros e defina
 * o maior e menor valor dentro do vetor.
 */

const menorOuMaior = (numeros) => {
  numeros = [
    1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21,
    22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40,
  ];
  let maior,  menor 
  for (i = 0; i < numeros.length; i++) {
    if(maior === undefined && menor === undefined){
      maior = numeros[i];
      menor = numeros[i];
    }else{
      if (numeros[i] > maior) {
        maior = numeros[i];
      } else if (numeros[i] < menor) {
        menor = numeros[i];
      }
    }
  }
  console.log(`O maior numero é = ${maior}`);
  console.log(`O menor numero é = ${menor}`);
};

menorOuMaior();




