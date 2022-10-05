const url = "http://files.cod3r.com.br/curso-js/funcionarios.json";
console.log("------------------------------------------------");
console.log("O axios é um claint que faz requisições HTTP");
const axios = require("axios");

console.log(
  "para resolver o desafio para trazer uma mulher",
  "chinesa com menor salário usaremos tres funções"
);
console.log("------------------------------------------------");
console.log("filter");
const chineses = (f) => f.pais === "China";
const mulheres = (f) => f.genero === "F";

console.log("reduce");
const menorSalario = (func, funcAtual) => {
  return func.salario < funcAtual.salario ? func : funcAtual;
};

console.log("------------------------------------------------");
//AQUI TRAS A LISTA
axios.get(url).then((response) => {
  const funcionarios = response.data;
  //console.log(funcionarios)

  console.log("------------------------------------------------");
  //AQUI TRAREMOS DOS DADOS DO EXERCÍCIO

  const func = funcionarios
    .filter(chineses)
    .filter(mulheres)
    .reduce(menorSalario);

  console.log(func);
});
