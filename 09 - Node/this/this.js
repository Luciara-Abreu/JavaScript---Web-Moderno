console.log(this === global)
console.log(this === module)

console.log(this === module.exports)
console.log(this === exports)

function logThis(){
  console.log('Dentro de uma funcção normal 1')
  console.log(this === exports)
  console.log(this === module.exports)
  console.log(this === global)
 }
 this.perigo = '...'
 logThis()

 const logThis2 = ()=> {
  console.log('Dentro de uma arrow funcion 2')
  console.log(this === exports)
  console.log(this === module.exports)
  console.log(this === global)
 }
 this.perigo = '...'
 logThis2()