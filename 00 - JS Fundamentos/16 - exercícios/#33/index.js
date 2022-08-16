/*
33) Crie três vetores, chamados vetorInteiro, vetorString e vetorDouble. 
Cada um destes vetores deverá conter quatro valores, sendo o primeiro com 
valores inteiros, o segundo com strings e o terceiro com valores decimais.
Declarados os vetores, utilize a função de união concat() de duas maneiras
diferentes para unir os vetores, e mostre o resultado no console. 
Todos os elementos do vetor resultado deverão aparecer no console.
 */

vetorInteiro = [5, 2, 1, 0];
vetorString = ["oi", "ola", "como vai", "tudo bem"];
vetorDouble = [1.5, 1.6, 1.7, 1.8];
const mostrarVetoresUnidos = (...args) => {
  resultado = [];
  for (let i = 0; i < args.length; i++) {
    resultado = resultado.concat(...args[i]);
  }
  return resultado;
};

console.log(mostrarVetoresUnidos(vetorInteiro,vetorString,vetorDouble))
console.log(mostrarVetoresUnidos(vetorInteiro, vetorDouble));
console.log(mostrarVetoresUnidos(vetorInteiro, vetorString));
console.log(mostrarVetoresUnidos(vetorDouble, vetorString));
