/*
10) Crie uma função que verifica se um número inteiro passado como parêmetro é 
divisível por 3 e retorne true ou false.
*/

function multiploDeTres(numero){
  if(numero % 3 === 0){
    return `Numero é divisível por 3 ===> ${true}`
  }else{
    return `Esse numero não é divisível por 3  ==> ${false}`
  }
}
console.log(multiploDeTres(39))