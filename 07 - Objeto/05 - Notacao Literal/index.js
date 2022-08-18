/**
 *
 */

const a = 1;
const b = 2;
const c = 3;

//ANTES
const obj1 = { a: a, b: b, c: c };
//hOJE
const obj2 = { a, b, c };
console.log(obj1, obj2);

//
const nomeAttr = "Nota";
const valorAttr = 7.87;

const obj3 = {};
obj3[nomeAttr] = valorAttr;
console.log(obj3);

const obj4 = { [nomeAttr]: valorAttr };
console.log(obj4);

const obj5 = {
  function1: function () {
    //....
  },
  function2: function () {
    //....
  },
  function3() {
    //....
  },
};
console.log(obj5);
