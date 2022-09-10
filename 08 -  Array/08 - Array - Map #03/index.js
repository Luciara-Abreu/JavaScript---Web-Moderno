console.log("------------------------------------------------");
console.log("Implementar o Map para ver como ele funciona - Map #03");


Array.prototype.map2 = function(callback) { 
  const newArray = []
    for (let i = 0; i < this.length; i++) {
      newArray.push(callback(this[i], i, this)) 
  }
  return newArray
}

const carrinho = [
  '{"nome": "Borracha", "preco": 3.45}',
  '{"nome": "Caderno", "preco": 13.90}',
  '{"nome": "kit de Lapis", "preco": 41.22}',
  '{"nome": "Caneta", "preco": 7.50}'
]

//Retornar um array apenas com os preços

const paraObjeto = json => JSON.parse(json)
const apenasPreco = value => value.preco
/*
com esses dois metodos criados a cima, podemos chamar dois maps e trazer só o
dado nescessário
*/ 
const result = carrinho.map2(paraObjeto).map2(apenasPreco)
console.log("Apenas os preços = >",result)
