console.log("-----/ * Funções anônimas * /-----");

const soma = function (x, y) {
  return x + y;
};
console.log("-----/ * 1 exemplo  * /-----");
console.log(soma(3, 7));

console.log("-----/ * 2 exemplo  * /-----");
const imprimirResult = function (a, b, operacao = soma) {
  console.log(operacao(a, b));
};
imprimirResult(3, 4);

console.log("-----/ * 3 exemplo passando outra função como parametro * /-----");
imprimirResult(3, 4, function (x, y) {
  return x - y;
});

console.log(
  "-----/ * 4 exemplo passando uma arrow função como parametro * /-----"
);
imprimirResult(3, 4, (x, y) => x * y);

console.log(
  "-----/ * 5 passar arrow function dentro do obj * /-----" )

  const pessoa = {
    falar(){
      console.log('Ola')
    }
  }
  pessoa.falar() 


