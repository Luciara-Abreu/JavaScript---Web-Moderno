console.log("------------------------------------------------");
console.log("JSON vc Objeto");
const obj = {a: 1, b: 2, c: 3, soma(){ return a + b + c}}//não faz calculos
console.log(JSON.stringify(obj))

console.log(JSON.parse('{"a":1, "b":2, "C":3}'))
console.log(JSON.parse('{"a":1, "b":2, "C":3, "d": {}, "e": []}'))
