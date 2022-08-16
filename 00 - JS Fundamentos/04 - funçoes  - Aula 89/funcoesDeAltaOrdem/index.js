/* 
paradigma funcional
First-Class Oject (Citizens)
Higher-order function
*/

console.log("-------------/ Criar de forma literal /-------------------");

function fun1() {}

console.log("----------/ armazenar uma função em uma variável /----------");
// função anonyma ou seja não precisa dizer que é uma function como na anterior
const fun2 = function () {};
console.log("----------/ armazenar em um array /----------");
// função anonyma ou seja não precisa dizer que é uma function como na anterior
const array = [
  function (a, b) {
    return a + b;
  },
  fun1,
  fun2,
];

console.log(array[0](2, 3));

console.log("----------/ armazenar em um atributo de objeto /----------");

const obj = {};

obj.falar = function () {
  return "ola";
};
console.log(obj.falar());

console.log("-----/ passar uma função como parâmetro para outra função /-----");

function rum(fun) {
  fun();
}
rum(function () {
  console.log("executando....");
});

console.log("-----/ uma função retorna outra função  /-----");
function soma(a,b){
  return function (c){
    console.log(a + b + c)
  }
}
soma(1,2)(3)

