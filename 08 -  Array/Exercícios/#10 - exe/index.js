console.log("------------------------------------------------");
/*
 * 10) Crie uma função que receba um array e retorne o primeiro
 * e o ultimo elemento desse array com um novo array
 */
console.log("------------------------------------------------");

const elementos = ["a", "b", "c"];

const primeiroEOUltimo = (elementos) => {
  const primeiro = elementos.shift()
  const ultimo = elementos.pop()
  return [primeiro, ultimo]
}
console.log(primeiroEOUltimo(elementos));
