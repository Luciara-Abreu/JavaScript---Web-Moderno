//Aqui estamos desestruturizando um objeto antes de termos os valores 
function rand ( { min =0, max = 1000}){
  const valor = Math.random() * (max - min) + min;
  return Math.floor(valor) 
}
/* Aqui estamos passando um objeto passando os valores para ele EEEEE
imprimindo na tela os valores que queremos */
console.log(rand ({ max: 50, min: 40}))

console.log('--------------------------')

function somaSimples({a =0 , b = 100}){
    const valor = b += a /2
    return valor
}
console.log(somaSimples ({ a: 2}))