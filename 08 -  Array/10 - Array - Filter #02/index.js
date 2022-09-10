console.log("------------------------------------------------");
console.log("Array - implementar o Filter #02");
/**
 * Filtrar o Array
 */


Array.prototype.filter2 = function(callback){
  const newArray = []
  for (let i = 0; i < this.length; i++) {
    if(callback(this[i], i, this)) {
      newArray.push(this[i])
    }
  }
return newArray
}

const produtos = [
  {nome: 'Notebook', preco: 6800, fragil: true },
  {nome: 'copos de vidros', preco: 15.49, fragil: true },
  {nome: 'iPpad Pro', preco: 9900, fragil: true },
  {nome: 'copos de plastico', preco: 12.99, fragil: false } 
]

console.log(produtos.filter2(function(e){
  return e.preco < 6000
}))

console.log("------------------------------------------------");
console.log("Outro Exemplo");

const prodFrageis = produto => produto.fragil == true
const prodCaro = value => value.preco > 5000

resultado = produtos.filter2(prodFrageis).filter2(prodCaro)
console.log(resultado)