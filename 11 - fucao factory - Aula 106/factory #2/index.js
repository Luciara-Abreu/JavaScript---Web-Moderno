console.log(
  "-----/ * Função factoy é a função que retorna um objeto. * /-----"
);

function criarProduto(nome,tipo, preço, quantidadeFolhas, estoque, cor) {
  return {
    nome,
    tipo,
    preço,
    quantidadeFolhas,
    estoque,
    cor,
    desconto: preço - 0.1
  };
}
console.table(criarProduto('superHerois', 'Folha simples', 30.00, 200,50,'preto' ));
console.table(criarProduto('superHerois', 'Capa Dura', 35.00, 200,50,'preto' ));
console.table(criarProduto('Gatinhos', 'Folha simples', 30.00, 200,50,'branco' ));
console.table(criarProduto('Gatinhos', 'Capa Dura', 35.00, 200,50,'branco' ));
