console.log("-----/ *  exemplo antigo *  /-----");
let dobro = function (a) {
  return 2 * a
}
console.log(dobro(4))


console.log("-----/ *  exemplo atual com arrow function *  /-----");
dobro = (a) => {
  return 2 * a
}
console.log(dobro(2))


console.log("-----/ *  uma forma ainda mais reduzida *  /-----");
//quando se tem um unica linha
dobro = a => 2 * a
console.log(dobro(3))

console.log("-----/ *  outra mais reduzida ainda *  /-----");
ola = () => 'Olá!'
console.log(ola())

