console.log("------------------------------------------------");
/*7) Crie uma função que receba 2 numeros inteiros não negativos
 * e realize a multiplicação deles. Porém, não pode usar o operador
 * de multiplicação
 */
console.log("------------------------------------------------");

const multiplicar = (n1, n2) => {
  let x = 0
  for (let i = 0; i < n2; i++)
    x += n1
  return x
}
const result = multiplicar(3, 5);
console.log("O resultado da multiplicação é => ", result);

console.log("------------------------------------------------");
