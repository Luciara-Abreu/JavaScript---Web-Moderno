console.log("------------------------------------------------");
/*17) Criar uma função que receba um array de numeros e retorne 
a média simples dos numeros 
 */
console.log("------------------------------------------------");
console.log("");

const numeros=[1,2,3,4,5]

const calcularMediaSimples = (numeros) => {
  let total = 0
  let media = 0
  for (let item of numeros)
  total += item
  media = total / numeros.length

  return media
}

console.log(calcularMediaSimples(numeros))
console.log("------------------------------------------------");
console.log("outro exemplo com reduce");

const calcaularMedia = (numeros)=> {
  const tamanho = numeros.length
  const total = numeros.reduce((numeroA, numeroB) => numeroA + numeroB)

  return total / tamanho
}
console.log(calcaularMedia(numeros))