console.log("------------------------------------------------");
console.log("Formas de usar os modulos criados no outro arquivo");

const ModuloA = require('./moduloA')
console.log(ModuloA.ola)
console.log(ModuloA.bemVindo)
console.log(ModuloA.ateLogo)

console.log("Imprimir oobjeto inteiro");
console.log(ModuloA)


console.log("------------------------------------------------");
const ModuloB = require('./moduloB')
console.log(ModuloB.bomDia)
console.log(ModuloB.boaNoite())

console.log("Imprimir oobjeto inteiro");
console.log(ModuloB)