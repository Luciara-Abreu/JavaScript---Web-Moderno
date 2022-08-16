// Aula 65 - Destructuring com arrays. 

const [a] = [10]
console.log(a)

const[n1, n3, n5, n6 =10] = [10, 7, 9, 8]
console.log(n1,n3,n5,n6)

const [, [, valor]] = [[8, 9, 10], [5, 22, 36]]
console.log(valor)