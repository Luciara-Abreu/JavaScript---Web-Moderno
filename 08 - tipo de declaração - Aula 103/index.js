
console.log("-----/ * function declaration. * /-----");
function soma(a, b){
  return a+b
}
console.log(soma(5,3))

console.log("-----/ * function expression. * /-----");
const sub = function(a,b){
  return a-b
}
console.log(sub(5,3))

console.log("-----/ * named function expression. * /-----");
const mult = function mult(a,b){
  return a*b
}
console.log(mult(5,3))
