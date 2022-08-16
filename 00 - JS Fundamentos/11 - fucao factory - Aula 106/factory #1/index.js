console.log("-----/ * Função factoy é a função que retorna um objeto. * /-----");

function criarProduto() {
  return {
    nome: 'caderno aventura',
    tipo: 'capa dura',
    preço:'35,00',
    quantidadeFolhas:'200',
    estoque: '50',
    cor:'preto'
  } 
}
console.log(criarProduto())