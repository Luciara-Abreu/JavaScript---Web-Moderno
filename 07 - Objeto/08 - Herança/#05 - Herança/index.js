console.log("------------------------------------------------");
console.log('What is typeof String? Typeof String is a', typeof String)
console.log('What is typeof Array? Typeof Array is a',typeof Array)
console.log('What is typeof Object? Typeof Object is a ',typeof Object)
console.log('Are all functions')
console.log("------------------------------------------------");
// Toda function tem o prototype então podemos fazer coisas do tipo
String.prototype.reverse = function(){
  return this.split('').reverse().join('')
}
console.log('Luci está aprendendo JS'.reverse())
console.log("------------------------------------------------");

// Não temos esse metodo first mas da para add
Array.prototype.first = function(){
  return this[3]
}
console.log([1,2,3,4,5].first())
console.log(['a','b','c','d','e'].first())