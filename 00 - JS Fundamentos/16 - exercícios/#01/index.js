/*
Crie uma função que dado dois valores (passados como parâmetros) mostre no console 
a soma, subtração,multiplicação e divisão desses valores.
*/
function mostreResultados(a, b) {
  const sum = a + b;
  const sub = a - b;
  const mult = a * b;
  const div = a / b;

    return (
      `Soma =: ${sum}. ` +
      `Subtração =: ${sub}. ` +
      `Multiplicação =: ${mult}. `+
      `Divisão =: ${div}`
    )  
}
console.log(mostreResultados(6, 3));


console.log('---------------------- Correção ----------------------');

function calcularOperacoes (a, b) {
  console.log('Soma =:', a+b, 'Subtração =:',a-b, 'Multiplicação =:',a*b,'Divisão =:', a/b);  
}
calcularOperacoes(6, 3)
