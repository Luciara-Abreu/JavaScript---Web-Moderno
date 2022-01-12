console.log("'1' == 1 é igual?")
console.log('01)', '1' == 1);
console.log('-----------------------------')

console.log("'1' === 1, é estritamente igual?")
console.log('02)', '1' === 1);
console.log('-----------------------------')

console.log("'3' != 3, é diferente?")
console.log('03)', '3' != 3);
console.log('-----------------------------')

console.log("'3' !== 3, é estritamente diferente?")
console.log('04)', '3' !== 3);
console.log('-----------------------------')

console.log("'3' < é menor que 2?")
console.log('05)', '3' < 2);
console.log('-----------------------------')

console.log("'3' > é maior que 2?")
console.log('06)', '3' > 2);
console.log('-----------------------------')

console.log("'3' <= é menor e igual a 2?")
console.log('07)', '3' <= 2);
console.log('-----------------------------')

console.log("'3' >= maior e igual a 2?")
console.log('08)', '3' >= 2);
console.log('-----------------------------')
//-------------------------------------------------------------------
const d1 = new Date(0); //variáveis de referencia. 
const d2 = new Date(0);// Ou seja... referencia de espaço na memória

//Aqui vai dar false pois está comparando o endereço da memória
console.log("d1 === é igual a d2?")
console.log('09)', d1 == d2);
console.log('-----------------------------')

console.log("d1 === é estritamente igual a d2?")
console.log('10)', d1 === d2);
console.log('-----------------------------')

//Nesse caso ele está comparando os números 
console.log("d1.getTime() == d2.getTime() é igual?")
console.log('11)', d1.getTime() == d2.getTime());
console.log('-----------------------------')

console.log("d1.getTime() == d2.getTime() é estritamente igual?")
console.log('12)', d1.getTime() === d2.getTime());
console.log('-----------------------------')

console.log("undefined == null é igual?")
console.log('13)', undefined == null);
console.log('-----------------------------')

console.log("undefined === null é estritamente igual?")
console.log('14)', undefined === null);
console.log('-----------------------------')

/* Via de regra é melhor usar o estritamente igual para não estar confundindo 
tipos. 
*/






