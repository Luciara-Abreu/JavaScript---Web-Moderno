const sequence = {
  _id:1,
  get id() {
    return this._id++
  }
}

const produtos = {}

// Aqui se o produto não tiver id a função colocara id no produto
function salvarProduto(produto) {
  if (!produto.id) produto.id = sequence.id
  produtos[produto.id] = produto
  return produto
}

// Aqui iremos pegar o produto pelo id
function getProduto(id) {
  return produtos[id] || {}
}

// Aqui retorno todos os produtos
function getProdutos() {
  return Object.values(produtos)
}


// Aqui exclui produtos
function excluirProdutos(id) {
  const produto = produtos[id]
  delete produtos[id]
  return produto
}

module.exports = {
  salvarProduto,
  getProduto,
  getProdutos,
}
