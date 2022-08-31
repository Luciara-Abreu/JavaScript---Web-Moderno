console.log("------------------------------------------------");
console.log("Evitando Modificações com preventExtensions");
/*
Objeto com tres atributos e a partir do preventExtensions onde não iremos 
conseguir add mais nenhum atributo, apenas mudar os valores que já temos e excluir
algum atributo
*/ 
const produto = Object.preventExtensions({
  nome: 'Qualquer', preco: 1.99, tag: 'promoção'
})

produto.nome = 'Borracha'
produto.descricao = 'Borracha escolar branca'
delete produto.tag
console.log(produto)

console.log("------------------------------------------------");
/*
Para evitar a exclusão de algum atribto usamos o .seal
*/

const pessoa ={nome: 'Luci', idade: 45}
Object.seal(pessoa)
console.log('Selado:',Object.isSealed(pessoa))
//vai retornar true pois pessoa está selada
//Como pessoa está selada não vai deletar o atributo nome

pessoa.sobrenome = 'Abreu'
delete pessoa.nome
pessoa.idade = 33
console.log(pessoa)