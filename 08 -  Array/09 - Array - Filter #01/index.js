console.log("------------------------------------------------");
console.log("Array - Filter #01");
/**
 * Filtrar o Array
 */

const produtos = [
  {nome: 'Notebook', preco: 6800, fragil: true },
  {nome: 'copos de vidros', preco: 15.49, fragil: true },
  {nome: 'iPpad Pro', preco: 9900, fragil: true },
  {nome: 'copos de plastico', preco: 12.99, fragil: false } 
]

console.log(produtos.filter(function(e){
  return e.preco < 6000
}))

console.log("------------------------------------------------");
console.log("Outro Exemplo");

const prodFrageis = produto => produto.fragil == true
const prodCaro = value => value.preco > 5000


resultado = produtos.filter(prodFrageis).filter(prodCaro)
console.log(resultado)
