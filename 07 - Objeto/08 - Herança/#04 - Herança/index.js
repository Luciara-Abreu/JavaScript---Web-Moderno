console.log("------------------------------------------------");
console.log("entender mais sobre prototype");

function MeuObjeto() {}
//Vai imprimir um atributo e ele é um objeto vazio ==> {}
console.log(MeuObjeto.prototype);
console.log("------------------------------------------------");
/* Será que esses objetos vão apontar para Objetc prototype 
ou vai apontar para MeuObjeto.prototype?? 
vamos ver isso no retorno do console.log
*/
const obj1 = new MeuObjeto();
const obj2 = new MeuObjeto();
console.log("------------------------------------------------");
//Eles apontam para o mesmo prototipo?
console.log(obj1.__proto__ === obj2.__proto__);
console.log(MeuObjeto.prototype === obj1.__proto__);

console.log("------------------------------------------------");
MeuObjeto.prototype.nome = "Luci";
MeuObjeto.prototype.falar = function () {
  console.log(`Bom dia! Meu nome é ${this.nome}!`);
};
obj1.falar();

obj2.nome = "Rafael";
obj2.falar();

const obj3 = {};
obj3.__proto__ = MeuObjeto.prototype;
obj3.nome = "Obj3";
obj3.falar();
console.log("------------------------------------------------");
console.log("Resumindo a loucura kkkk");

console.log(new MeuObjeto().__proto__ === MeuObjeto.prototype);
console.log(MeuObjeto.__proto__ === Function.prototype);
console.log(Function.prototype.__proto__ === Object.prototype);
