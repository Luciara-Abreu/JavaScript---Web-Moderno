console.log("------------------------------------------------");
console.log("Array - Map #02");

const carrinho = [
  '{"nome": "Borracha", "preco": 3.45}',
  '{"nome": "Caderno", "preco": 13.90}',
  '{"nome": "kit de Lapis", "preco": 41.22}',
  '{"nome": "Caneta", "preco": 7.50}'
]

//Retornar um array apenas com os preços

const paraObjeto = json => JSON.parse(json)
const apenasNome = Produto => Produto.nome
const apenasPreco = value => value.preco
/*
com esses dois metodos criados a cima, podemos chamar dois maps e trazer só o
dado nescessário
*/ 
const result = carrinho.map(paraObjeto).map(apenasPreco)
console.log("Apenas os preços = >",result)

const result2 = carrinho.map(paraObjeto).map(apenasNome)
console.log("Apenas os Nome = >",result2)