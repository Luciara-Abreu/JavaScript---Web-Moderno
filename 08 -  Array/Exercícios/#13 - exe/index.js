console.log("------------------------------------------------");
/*13)
* Desenvolva uma função que receba um array de numeros e 
retorne apenas os numeros pares e que tenham índices pares
*/
console.log("------------------------------------------------");
console.log("Apenas Par");
const arrayNumber = [10,70,22,43];
const result = [];

const apenasPare = (arrayNumber) => {
  for (let i = 0; i < arrayNumber.length; i++) {
    const numPar = arrayNumber[i] % 2 === 0;

    if (numPar) result.push(arrayNumber[i]);
  }
  return result;
};

console.log(apenasPare(arrayNumber));

console.log("------------------------------------------------");
console.log("Par e indice Par");
const somentePares = (arrayNumber) => {
  return arrayNumber.filter((numero, indice) => {
    const numPar = numero % 2 === 0;
    const indPar = indice % 2 === 0;

    return numPar, indPar;
  });
};
console.log(somentePares(arrayNumber));
