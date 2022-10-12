//middleware pattern (chain of responsibility)

const passo1 = (context, next) => {
  context.nome1 = "caneta Azul"
  context.valor1 = "5.0"
  context.tipo1 = "mdl1"
  next()
}

console.log('----------------------------------------------------------------')

const passo2 = (context, next) => {
  context.nome2 = "Lapis de Cor"
  context.valor2 = "10.9"
  context.tipo2 = "mdl2"
  next()
}
console.log('----------------------------------------------------------------')

const passo3 = context => {
  context.nome3 = "Cola branca"
  context.valor3 = "3.8"
  context.tipo3 = "mdl3"
}


/*Agora iremos criar uma função que executa todos os middlewares e chama o next
quando a função foi disparada
*/

const exec = (contexto, ...listaMiddlewares) => {
  const execPasso = (indice) => {
    listaMiddlewares &&
      indice < listaMiddlewares.length &&
      listaMiddlewares[indice](contexto, () => execPasso(indice + 1));
  };
  execPasso(0);
};
// Para executar

const contexto = {};
exec(contexto, passo1,passo2, passo3);
console.log(contexto);
