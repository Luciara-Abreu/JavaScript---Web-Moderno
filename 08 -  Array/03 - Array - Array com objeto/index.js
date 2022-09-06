console.log("------------------------------------------------");
console.log("Arrays: array com objeto ");

const quaseArray = { 0: "Rafael", 1: "Anna", 02: "Lucas" };
console.log("O que é esse quaseArray? == > ", typeof quaseArray);
console.log(quaseArray);

console.log("------------------------------------------------");
console.log("Como imprimir um QuaseArray ");

Object.defineProperty(quaseArray, "toString", {
  value: function () {
    return Object.values(this);
  },
  enumerable: false,
});
console.log(quaseArray[0]);

console.log("------------------------------------------------");
console.log("Diferenca de imprimir um quaseArray e um Array ");

const meuArray = ["Rafael", "Anna", "Lucas"]
console.log(quaseArray.toString(), meuArray)

