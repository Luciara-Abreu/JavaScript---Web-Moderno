console.log("--/ * Como chamar funções através do call * /--");
//A diferença entre o call e o apply é a forma em que vc passa os parametros
//na hora de invocar essa função

function getPreco(imposto = 0, moeda = "R$") {
  return `${moeda} ${this.preco * (1 - this.desc) * (1 + imposto)}`;
}
const produto = {
  nome: "Notebook",
  preco: 4589,
  desc: 0.15,
  getPreco,
};

global.preco = 20;
global.desc = 0.1;
console.log(getPreco());
console.log(produto.getPreco());

const carro = { preco: 49990, desc: 0.2 };

console.log(
  "--/ * na hora de passar parametros call, " +
    "O primeiro parametro é o contexto e depois os parametros* /--"
);
console.log(getPreco.call(carro, 0.17, "$"));

console.log(
  "--/ * na hora de passar parametros aply, " +
    "O primeiro parametro é o contexto e depois um array com os parametros* /--"
);
console.log(getPreco.apply(carro, [0.5]));
