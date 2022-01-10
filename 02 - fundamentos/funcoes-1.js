// Dois exemplos simples pois teremos um captitulo apenas para funções.
//função sem retorno - Aula 50

function imprimeSoma(a, b) {
  console.log(a + b)
}
imprimeSoma(2, 3)
//-----------------------------------------------------------------------------
//função com retorno
function soma(a, b= 0){
  return a + b
}
console.log(soma(3, 3))