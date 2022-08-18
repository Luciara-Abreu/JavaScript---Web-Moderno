const pessoa = {
  nome: "Anna",
  idade: 2,
  peso: 13,
};
console.log("------------------------------------------------");
console.log("");
console.log("aqui vc pega as chaves do obj pessoa");
console.log(Object.keys(pessoa));
console.log("------------------------------------------------");
console.log("para saber a quantidade de chaves do obj");
console.log(Object.keys(pessoa).length);
console.log("------------------------------------------------");
console.log("para pegar os valore de tederminado objeto");
console.log(Object.values(pessoa));
console.log("------------------------------------------------");
console.log("para pegar a lista de registros do obj");
console.log(Object.entries(pessoa));
console.log("------------------------------------------------");
console.log(
  "e através dessa lista podemos percorrer o array e tirar de dentro",
  "apenas o elemento 1 e o elemento 2 que é a Chave e o Valor"
);
Object.entries(pessoa).forEach((e) => {
  console.log(`${e[0]}: ${e[1]}`);
});
console.log("------------------------------------------------");
console.log(
  "Outra forma de fazer pelo destruturando é trocar o e= evento por..",
  "chave e valor"
);
Object.entries(pessoa).forEach(([chave, valor]) => {
  console.log(`${chave}: ${valor}`);
});
console.log("------------------------------------------------");
console.log('Uma função para add uma propriedade dentro do Obj',
'enumerable - aqui vou definir se ela será listada',
'Writable - Essa propriedade impede de ser modificada')

Object.defineProperty(pessoa, 'dataNascimento',{
  enumerable: true,
  Writable: false,
  values: '22/08/1977'
})
console.log(pessoa.dataNascimento)
console.log(Object.keys(pessoa))

console.log("------------------------------------------------");
console.log('Uma forma de concatenar objetos em um unico é com a função',
'assing, veja o exemplo abaixo');

const dest = {a: 1}
const obj1 = {b: 2}
const obj2 = {c: 3, a: 4} // esse aqui sobreescreve o primeiro a
//O primeiro paramentro dentro do assing é o obj que vai receber os outros dois 
//ou seja o dest vai receber tudo que tem no obj1 e no obj2
const obj = Object.assign(dest, obj1, obj2)
console.log(obj)

console.log("------------------------------------------------");
console.log('Uma função que congela o obj ou um parametro de um obj é o freeze',
'Vamos usar o mesmo exemplo de cima e tentar mudar ... veja abaixo');

Object.freeze(obj) // aqui o objeto foi congelado e não poderemos mudar
obj.c = 5 // aqui estamos tentando mudar
console.log(obj) //o c não foi alterado.



console.log("------------------------------------------------");
console.log('')

