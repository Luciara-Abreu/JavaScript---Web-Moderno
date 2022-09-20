console.log("------------------------------------------------");
/*
9) Elabore uma função que receba um numero como parametro
* e retorne uma sting com o simbolo '+' na quantidade especificada
* no parametro 
*/
console.log("------------------------------------------------");

const returnMaisMais = (x) => {
  let result = "";
  for (let i = 0; i < x; i++) {
    result += "+";
  }
  return result;
};
const resultado = returnMaisMais(3);
console.log(resultado);

console.log("------------------------------------------------");
// exemplo do profe

function simboloMais(quantidade) {
  return Array(quantidade).fill("+").join("");
}
console.log(simboloMais(5))
