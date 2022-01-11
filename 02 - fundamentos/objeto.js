// Agora entendi que tudo é função.
console.log(' ------- Object ')
console.log(typeof Object)
console.log(typeof new Object)

console.log(' ------- Cliente ')

const Cliente = function(){}
console.log(typeof Cliente)
console.log(typeof new Cliente)

console.log(' ------- Produto ')

class Produto {} // ES 2015 (ES6)
console.log(typeof Produto)
console.log(typeof new Produto())
