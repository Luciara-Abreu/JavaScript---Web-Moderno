/*
 *Ler um vetor de números inteiros e imprimir quantos são pares e quantos são ímpares.
 */

const qtParQtImpar = () => {
  par = 0;
  ímpar = 0;
  numInteiros = [
    1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19];
  for (i = 0; i < numInteiros.length; i++) {
    if (numInteiros[i] % 2 == 0) {
      par++;
    } else {
      ímpar++;
    }
  }
  console.log(`Pares = ${par}`);
  console.log(`Ímpares = ${ímpar}`);
};
qtParQtImpar();


