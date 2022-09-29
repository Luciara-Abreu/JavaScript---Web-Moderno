console.log("------------------------------------------------");
/*16) Criar uma função que receba um array de produtos e some
o total de despesas
no array deve ter 
nome do produto
categoria e preço
 */
console.log("------------------------------------------------");
console.log("");

const arrayProdutos = ([
  
    {nome: "Lapis de Cor",
    categoria: "Material Escolar",
    preco: 10}, 
 
    {nome: "Canetas hidrocor",
    categoria: "Material Escolar",
    preco: 20},

    {nome: "Canela 10 cores", 
    categoria: "Material Escolar", 
    preco: 5}
])

const somarTotal = (arrayProdutos) => {
var total = 0

for( let item of arrayProdutos)
  total += item.preco 
  return total;
};

console.log(somarTotal(arrayProdutos));
console.log("------------------------------------------------");
console.log("Exemplo com map e reduce");

function somaTotal(arrayProdutos) {
  return arrayProdutos
  .map(item => item.preco)
  .reduce((acumulador, valorAtual) => acumulador + valorAtual)
}

console.log(somaTotal(arrayProdutos))

console.log("------------------------------------------------");
console.log("Exemplo com reduce");

function despesasTotais(arrayProdutos){
  return arrayProdutos.reduce((acumulador, valorAtual) => acumulador + valorAtual.preco,0)
}

console.log(despesasTotais(arrayProdutos))