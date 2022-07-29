console.log("-----/ * function *  /-----");

let comparComThis = function (param) {
  console.log(this === param);
};
comparComThis(global);

console.log("-----/ * bind *  /-----");
const obj = {}
comparComThis = comparComThis.bind(obj)
comparComThis(global)

console.log("-----/ * variável obj  *  /-----");
comparComThis(obj)

console.log("-----/ * arrow * /-----");
let comparComThisArrow = (param) => {console.log(this === param)}
comparComThisArrow(global)
comparComThisArrow(module.exports)
