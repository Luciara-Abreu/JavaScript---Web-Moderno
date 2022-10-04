console.log("------------------------------------------------");
console.log("O this é uma referencia para o module.exports");
console.log(module.exports === this);

console.log("------------------------------------------------");
console.log("O exports tbm aponta para o module.exports");
console.log(module.exports === exports);

console.log("------------------------------------------------");
console.log("Sendo assim, podemos exportar para fora da pasta de 3 formas");

this.a = 1,
exports.b = 2,
module.exports.c = 3

console.log(module.exports)

console.log("------------------------------------------------");
console.log(" ");


console.log("------------------------------------------------");
console.log(" ");