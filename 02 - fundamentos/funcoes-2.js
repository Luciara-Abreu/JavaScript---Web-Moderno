//Armazenando variável em uma função.
//Aula 51

const imprimeSoma = function (a, b) {
  console.log(a + b)
}
imprimeSoma(3, 4)
//----------------------------------------------------------------------------
//Armazenando variável em uma função arrow em uma variável.
// Atualização de 2015 onde a seta => substitui a palavra function

const soma = (a, b) => {
  return a + b
}
console.log(soma(2, 5))
//----------------------------------------------------------------------------
// retorno implícito
const subtração = (a, b) => a - b;
console.log(subtração(10,3))


