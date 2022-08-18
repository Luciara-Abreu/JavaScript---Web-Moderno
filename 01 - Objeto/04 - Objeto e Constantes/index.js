// Como eu alterei os atributos do objeto se eles são  constantes???

const pessoa ={nome: 'João'}
pessoa.nome = 'Pedro'
console.log(pessoa.nome)

/*
Pessoa é um espaço na memória, e esse local, na memória nao pode ser alterado.
O que pode ser alterado como no exemplo a cima, é o dado que iremos guardar
nesse local.Por isso mesmo que pessoa seja uma constante, o seu valor pode ser 
alterado.
Dessa forma, não podermos apontar para o obj pessoa um outro objeto pois ele já
tem referencia em um lugar e isso daria erro como no exemplo abaixo.
ao rodarmos esse console, ele dara um erro...
*/

pessoa = {nome: 'Anna'}
console.log(pessoa.nome)