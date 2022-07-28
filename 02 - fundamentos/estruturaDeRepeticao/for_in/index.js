/*O for in ele não dá as notas do array mas sim o indice desse array*/

/**
 * TODO: Após colocar a saída como o padrão funcionou <3
 */

console.log("--------------/ FOR / IN /------------------");

const notas = [4.5, 5.5, 6.5, 7.5, 8.5, 9.5, 10.0];

for (i in notas) {
  console.log(`i= ${notas[i]}`);
}

console.log("--------------/ Outro exemplo com objeto /------------------");

/**
 * TODO: Another example
 */
const pessoa = {
  name: "Anna",
  SecundName: "Fracis",
  age: "33",
  preferredColor: "000000",
};

//let impede que após o laço não se tenha mais acesso aos atributos da pessoa
for (let atributo in pessoa) {
  console.log(`${atributo} = ${pessoa[atributo]}`);
}
