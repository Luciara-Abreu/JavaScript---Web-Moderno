console.log("------------------------------------------------");
console.log("Exercícios");

/*1) Criar uma função que retorne uma string 'Ola' concatenada com um
argumento text a ser passado e o ponto de exclamação. 
Ex.: "Olá, Luci!!"
*/

const stringConcat = (nome) =>{
  console.log(`Olá, ${nome}!`)
}
stringConcat('Luci')

console.log("------------------------------------------------");
const saudacao1 = 'Olá, '
console.log(saudacao1.concat('Luci').concat('!'))


console.log("------------------------------------------------");
const saudacao2 = 'Olá'

const saudacaoConcat =(nome) => {
  return `${saudacao2}, ${nome}` + '!'
}
console.log(saudacaoConcat('Luci'))