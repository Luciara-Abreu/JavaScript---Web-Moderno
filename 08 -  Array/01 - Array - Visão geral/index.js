console.log("------------------------------------------------");
console.log("");

console.log('este é um => ',typeof Array,'| este é um => ', typeof new Array,
'| este é um => ',typeof[])

console.log("------------------------------------------------");
console.log("Formas para criar Array");

let aprovados = new Array('Anna','Bia','Carlos','Luci')
console.log('Aprovados ==> ',aprovados)

aprovados = ['Anna','Bia','Carlos','Luci']
console.log(aprovados[0])
console.log(aprovados[1])
console.log(aprovados[2])
console.log(aprovados[3])
console.log(aprovados[4])
console.log("------------------------------------------------");
console.log("Add novos elementos no array");

aprovados[4] = 'Paulo'
aprovados.push('André')
console.log(aprovados[4])
console.log(aprovados[5])

console.log("------------------------------------------------");
console.log("Validar tamanho do array");
console.log(aprovados.length)


console.log("------------------------------------------------");
console.log("Add um elemento em um indice mais para frente");
aprovados[9] = 'Rafael'
console.log(aprovados.length)
console.log(aprovados[8]=== undefined)
console.log(aprovados)//Vai ficar com tres itens vazios ==> <3 empty items>.
aprovados.sort() // Essa função ordenou o array. colocou os vazios para o final
//e ainda deixou em ordem alfabetica
console.log(aprovados)

console.log("------------------------------------------------");
console.log('Excluir ou add com metodo splice');

aprovados = ['Anna','Bia','Carlos','Luci']
aprovados.splice(1,2) //ele vai excluir dois elementos a partir do elemento 1
console.log(aprovados)
console.log("------------------------------------------------");
console.log('Excluir e add ao mesmo tempo')

aprovados = ['Anna','Bia','Carlos','Luci']
aprovados.splice(1,2, 'elemento1', 'elemento2') 
console.log(aprovados)

console.log("------------------------------------------------");
console.log('Add ')

aprovados = ['Anna','Bia','Carlos','Luci']
aprovados.splice(4,1,'elemento1','elemento2') 
console.log(aprovados)



