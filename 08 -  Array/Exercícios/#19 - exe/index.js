console.log("------------------------------------------------");
/*19) Criar uma função que receba um array e retorne o menor
numero desse array
 */
console.log("------------------------------------------------");
console.log("");

const arrayNumero = [10, 5, 35, 65]; // Deve retornar 5

const menorNumero = (arrayNumero) => {
  let menor = arrayNumero[0];
  for (let i in arrayNumero) {
    if (arrayNumero[i] < menor) 
    menor = arrayNumero[i];
  }
  return menor;
};

console.log(menorNumero(arrayNumero));
console.log("------------------------------------------------");
console.log("Exemplo com reduce")


const menorNumero2 = (arrayNumero) => {
  return arrayNumero.reduce((anterior, atual) => 
  anterior < atual ? anterior : atual)
}
console.log(menorNumero2(arrayNumero))

console.log("------------------------------------------------");
console.log("Exemplo 3")

function menorNumero3 (arrayNumero) {
 return Math.min(...arrayNumero)
}
console.log(menorNumero3(arrayNumero))