console.log("------------------------------------------------");
console.log("Array - Map #01");

/*
O map serve para fazer uma transformação no array.
O map mapeia o array e joga para outro array de mesmo tamanho com os dados
transformados. Exemplo vc tem um array com tres elementos e vc quer percorrer 
esse array e jogar para outro array o dobor do valor dos elementos do array 
original
*/ 

const nums = [1,2,3,4,5]

let result = nums.map(function(e){
  return e * 2
})
console.log(nums)
console.log(result)

console.log("------------------------------------------------");
console.log('chamar tres maps consecutivos');

const soma10 = e => e + 10
const triplo = e => e * 3
const paraDinheiro = e => `R$ ${parseFloat(e).toFixed(2).replace('.',',')}`

resultado1 = nums.map(soma10)
resultado2 = nums.map(soma10).map(triplo)
resultado3 = nums.map(soma10).map(triplo).map(paraDinheiro)

console.log(resultado1)
console.log(resultado2)
console.log(resultado3)

