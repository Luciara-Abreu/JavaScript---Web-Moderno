/* par nome/valor - Aula 62
// contexto léxico 1 = léxico tem haver com palavra. Ou seja em que local fisico
do seu código aquela variável chave e valor foi definida.
*/

const saudacao = 'Opa!' // Contexto léxico 1

function exec() {
  const saudacao = 'Falaaa' // Contexto léxico 2
  return saudacao;
}
/* Objetos são grupos aninhados de pares nome/valor */
const cliente = {
  nome: 'Pedro',
  idade: 22,
  peso: 80,
  endereco: {
    rua: 'Tammus Beltrão',
    numero: 252,
    cep: '5552555',
    cidade: 'Zania',
    Estado: 'Tzarka'
  }
}

console.log(saudacao);
console.log(exec());
console.log(cliente);
