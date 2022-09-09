console.log("------------------------------------------------");
console.log("Arrays: Foreach #01");

const aprovados = ['Lucas', 'Eder','Luci','Anna','Maria','Izabel','Daiane']
// funcção de callback
aprovados.forEach(function(nome, indice){
  console.log(`${indice + 0}) ${nome}`)
})

console.log("------------------------------------------------");
console.log("Outro exemplo sem passar nada como paramentro");

aprovados.forEach(nome => console.log(nome))
console.log("------------------------------------------------");
aprovados.forEach(value => console.log(value))

console.log("------------------------------------------------");
console.log("armazenar a função em uma variavel e passar por paramentro");

const exibirAprovados = aprovados => console.log(aprovados)
aprovados.forEach(exibirAprovados)

console.log("------------------------------------------------");
console.log("primeiro parametro do forEach é o value, segundo é o indice e", 
"terceiro é o prórpio array");

aprovados.forEach(function(array){
  console.log(array)
})

