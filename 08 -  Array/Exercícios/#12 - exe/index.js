console.log("------------------------------------------------");
/*12)
* Desenvolva uma função que receba um objeto e retorne um array
de arrays.
*Cada elemento é um array formado pelos pares chave/valor que 
*/
console.log("------------------------------------------------");

const dadosPessoa = ({
  nome: "Luci Abreu",
  profissão: "Desenvolvedora de software" 
})

const arrayPessoa =(dadosPessoa) =>{
  const result =[]

  for( let chave in dadosPessoa)
  result.push([chave, dadosPessoa[chave]])
  
  return result
}

console.log(arrayPessoa(dadosPessoa))

console.log("------------------------------------------------");
console.log("Exemplo profe");

function deObjetoParaArray(dadosPessoa){
  return Object.entries(dadosPessoa)
}

console.log(deObjetoParaArray(dadosPessoa))

