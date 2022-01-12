/*Aula 64 - operador destructuring tira da estrutura algo. É uma forma de 
extrair do objeto os atributos .... ou extrair de um array */

const pessoa = {
  nome: 'Maria Juaquina',
  idade: '7',
  endereco: {
    logradouro: 'Rua da felicidade',
    numero: 22,
    }
  }
/* vamos destructuring o objeto para pegar dois valores através dessas 
chaves que representa o operador destructuring */

        // tire nome e idade do objeto pessoa
  const { nome, idade } = pessoa
  console.log( nome, idade)

  console.log('--------------------------')
      //destructirizar e atribuir a outras variáveis
  const { nome: n, idade: i} = pessoa
  console.log( n, i)

  console.log('--------------------------')
     //Se quiser tirar objeto de dentro do objeto...
  const { endereco: { logradouro ,numero, cep } } = pessoa
  console.log( logradouro, numero, cep )