console.log("------------------------------------------------");
/*15)
 * Desenvolva uma função que receba um array de numeros e retorne
a soma de todos os numeros do array
 */
console.log("------------------------------------------------");
console.log("Soma de todos os numeros do array");

const arrayNumber = [1, 2, 3, 4, 5]; // soma tem que dar 15


const somaArray = (arrayNumber) => {
  const qtNumeros = arrayNumber.length
  return (qtNumeros === 0) ? 0 :  arrayNumber[0] + somaArray(arrayNumber.slice(1))
};

console.log(somaArray(arrayNumber));
console.log("------------------------------------------------");
console.log("Outro exemplo do porfe");

const somarArray2 = (arrayNumber) => {
  let soma = 0
  arrayNumber.forEach(numero => soma += numero)

  return soma
}
console.log(somarArray2(arrayNumber))
console.log("------------------------------------------------");
console.log("Outro exemplo do porfe com reduce");

const somarArray3 = (arrayNumber) =>{
  const soma = arrayNumber.reduce((acumulador, numeroAtual) => acumulador + numeroAtual,0)

  return soma
}
console.log(somarArray3(arrayNumber))